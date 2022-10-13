package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemXAmzTargetEnum string

const (
	GetItemXAmzTargetEnumDynamoDb20111205GetItem GetItemXAmzTargetEnum = "DynamoDB_20111205.GetItem"
)

type GetItemHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetItemXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetItemRequest struct {
	Headers GetItemHeaders
	Request shared.GetItemInput `request:"mediaType=application/json"`
}

type GetItemResponse struct {
	ContentType                            string
	GetItemOutput                          *shared.GetItemOutput
	InternalServerError                    *interface{}
	ProvisionedThroughputExceededException *interface{}
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
