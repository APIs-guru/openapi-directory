package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetQueryExecutionXAmzTargetEnum string

const (
	BatchGetQueryExecutionXAmzTargetEnumAmazonAthenaBatchGetQueryExecution BatchGetQueryExecutionXAmzTargetEnum = "AmazonAthena.BatchGetQueryExecution"
)

type BatchGetQueryExecutionHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetQueryExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
