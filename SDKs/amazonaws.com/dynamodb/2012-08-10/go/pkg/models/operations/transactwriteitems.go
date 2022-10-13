package operations

import (
	"openapi/pkg/models/shared"
)

type TransactWriteItemsXAmzTargetEnum string

const (
	TransactWriteItemsXAmzTargetEnumDynamoDb20120810TransactWriteItems TransactWriteItemsXAmzTargetEnum = "DynamoDB_20120810.TransactWriteItems"
)

type TransactWriteItemsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TransactWriteItemsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TransactWriteItemsRequest struct {
	Headers TransactWriteItemsHeaders
	Request shared.TransactWriteItemsInput `request:"mediaType=application/json"`
}

type TransactWriteItemsResponse struct {
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	ProvisionedThroughputExceededException *interface{}
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	TransactWriteItemsOutput               *shared.TransactWriteItemsOutput
	TransactionCanceledException           *interface{}
	TransactionInProgressException         *interface{}
}
