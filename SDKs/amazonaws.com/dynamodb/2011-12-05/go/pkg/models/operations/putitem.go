package operations

import (
	"openapi/pkg/models/shared"
)

type PutItemXAmzTargetEnum string

const (
	PutItemXAmzTargetEnumDynamoDb20111205PutItem PutItemXAmzTargetEnum = "DynamoDB_20111205.PutItem"
)

type PutItemHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutItemRequest struct {
	Headers PutItemHeaders
	Request shared.PutItemInput `request:"mediaType=application/json"`
}

type PutItemResponse struct {
	ConditionalCheckFailedException        *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	PutItemOutput                          *shared.PutItemOutput
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
