package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteTransactionXAmzTargetEnum string

const (
	ExecuteTransactionXAmzTargetEnumDynamoDb20120810ExecuteTransaction ExecuteTransactionXAmzTargetEnum = "DynamoDB_20120810.ExecuteTransaction"
)

type ExecuteTransactionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ExecuteTransactionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ExecuteTransactionRequest struct {
	Headers ExecuteTransactionHeaders
	Request shared.ExecuteTransactionInput `request:"mediaType=application/json"`
}

type ExecuteTransactionResponse struct {
	ContentType                            string
	ExecuteTransactionOutput               *shared.ExecuteTransactionOutput
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	ProvisionedThroughputExceededException *interface{}
	RequestLimitExceeded                   *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	TransactionCanceledException           *interface{}
	TransactionInProgressException         *interface{}
}
