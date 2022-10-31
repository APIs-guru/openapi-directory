package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetItemQueryParams struct {
	RequestItems *string `queryParam:"style=form,explode=true,name=RequestItems"`
}

type BatchGetItemXAmzTargetEnum string

const (
	BatchGetItemXAmzTargetEnumDynamoDb20111205BatchGetItem BatchGetItemXAmzTargetEnum = "DynamoDB_20111205.BatchGetItem"
)

type BatchGetItemHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchGetItemRequest struct {
	QueryParams BatchGetItemQueryParams
	Headers     BatchGetItemHeaders
	Request     shared.BatchGetItemInput `request:"mediaType=application/json"`
}

type BatchGetItemResponse struct {
	BatchGetItemOutput                     *shared.BatchGetItemOutput
	ContentType                            string
	InternalServerError                    *interface{}
	ProvisionedThroughputExceededException *interface{}
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
