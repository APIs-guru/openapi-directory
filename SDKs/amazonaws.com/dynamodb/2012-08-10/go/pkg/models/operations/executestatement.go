package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteStatementXAmzTargetEnum string

const (
	ExecuteStatementXAmzTargetEnumDynamoDb20120810ExecuteStatement ExecuteStatementXAmzTargetEnum = "DynamoDB_20120810.ExecuteStatement"
)

type ExecuteStatementHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExecuteStatementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExecuteStatementRequest struct {
	Headers ExecuteStatementHeaders
	Request shared.ExecuteStatementInput `request:"mediaType=application/json"`
}

type ExecuteStatementResponse struct {
	ConditionalCheckFailedException          *interface{}
	ContentType                              string
	DuplicateItemException                   *interface{}
	ExecuteStatementOutput                   *shared.ExecuteStatementOutput
	InternalServerError                      *interface{}
	ItemCollectionSizeLimitExceededException *interface{}
	ProvisionedThroughputExceededException   *interface{}
	RequestLimitExceeded                     *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	TransactionConflictException             *interface{}
}
