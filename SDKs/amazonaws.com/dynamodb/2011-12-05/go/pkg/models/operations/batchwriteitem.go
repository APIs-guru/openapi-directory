package operations

import (
	"openapi/pkg/models/shared"
)

type BatchWriteItemXAmzTargetEnum string

const (
	BatchWriteItemXAmzTargetEnumDynamoDb20111205BatchWriteItem BatchWriteItemXAmzTargetEnum = "DynamoDB_20111205.BatchWriteItem"
)

type BatchWriteItemHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchWriteItemXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchWriteItemRequest struct {
	Headers BatchWriteItemHeaders
	Request shared.BatchWriteItemInput `request:"mediaType=application/json"`
}

type BatchWriteItemResponse struct {
	BatchWriteItemOutput                   *shared.BatchWriteItemOutput
	ContentType                            string
	InternalServerError                    *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
