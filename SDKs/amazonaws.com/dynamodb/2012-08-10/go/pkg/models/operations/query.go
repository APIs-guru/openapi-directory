package operations

import (
	"openapi/pkg/models/shared"
)

type QueryQueryParams struct {
	ExclusiveStartKey *string `queryParam:"style=form,explode=true,name=ExclusiveStartKey"`
	Limit             *string `queryParam:"style=form,explode=true,name=Limit"`
}

type QueryXAmzTargetEnum string

const (
	QueryXAmzTargetEnumDynamoDb20120810Query QueryXAmzTargetEnum = "DynamoDB_20120810.Query"
)

type QueryHeaders struct {
	XAmzAlgorithm     *string             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        QueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type QueryRequest struct {
	QueryParams QueryQueryParams
	Headers     QueryHeaders
	Request     shared.QueryInput `request:"mediaType=application/json"`
}

type QueryResponse struct {
	ContentType                            string
	InternalServerError                    *interface{}
	ProvisionedThroughputExceededException *interface{}
	QueryOutput                            *shared.QueryOutput
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
