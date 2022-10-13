package operations

import (
	"openapi/pkg/models/shared"
)

type TransactGetItemsXAmzTargetEnum string

const (
	TransactGetItemsXAmzTargetEnumDynamoDb20120810TransactGetItems TransactGetItemsXAmzTargetEnum = "DynamoDB_20120810.TransactGetItems"
)

type TransactGetItemsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TransactGetItemsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TransactGetItemsRequest struct {
	Headers TransactGetItemsHeaders
	Request shared.TransactGetItemsInput `request:"mediaType=application/json"`
}

type TransactGetItemsResponse struct {
	ContentType                            string
	InternalServerError                    *interface{}
	ProvisionedThroughputExceededException *interface{}
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	TransactGetItemsOutput                 *shared.TransactGetItemsOutput
	TransactionCanceledException           *interface{}
}
