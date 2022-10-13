package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetQueryExecutionXAmzTargetEnum string

const (
	BatchGetQueryExecutionXAmzTargetEnumAmazonAthenaBatchGetQueryExecution BatchGetQueryExecutionXAmzTargetEnum = "AmazonAthena.BatchGetQueryExecution"
)

type BatchGetQueryExecutionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetQueryExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetQueryExecutionRequest struct {
	Headers BatchGetQueryExecutionHeaders
	Request shared.BatchGetQueryExecutionInput `request:"mediaType=application/json"`
}

type BatchGetQueryExecutionResponse struct {
	BatchGetQueryExecutionOutput *shared.BatchGetQueryExecutionOutput
	ContentType                  string
	InternalServerException      *interface{}
	InvalidRequestException      *interface{}
	StatusCode                   int64
}
