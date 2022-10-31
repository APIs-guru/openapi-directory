package operations

import (
	"openapi/pkg/models/shared"
)

type TransactGetItemsXAmzTargetEnum string

const (
	TransactGetItemsXAmzTargetEnumDynamoDb20120810TransactGetItems TransactGetItemsXAmzTargetEnum = "DynamoDB_20120810.TransactGetItems"
)

type TransactGetItemsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TransactGetItemsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
