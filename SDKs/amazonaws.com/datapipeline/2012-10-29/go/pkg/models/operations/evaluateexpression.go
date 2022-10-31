package operations

import (
	"openapi/pkg/models/shared"
)

type EvaluateExpressionXAmzTargetEnum string

const (
	EvaluateExpressionXAmzTargetEnumDataPipelineEvaluateExpression EvaluateExpressionXAmzTargetEnum = "DataPipeline.EvaluateExpression"
)

type EvaluateExpressionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EvaluateExpressionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type EvaluateExpressionRequest struct {
	Headers EvaluateExpressionHeaders
	Request shared.EvaluateExpressionInput `request:"mediaType=application/json"`
}

type EvaluateExpressionResponse struct {
	ContentType               string
	EvaluateExpressionOutput  *shared.EvaluateExpressionOutput
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineDeletedException  *interface{}
	PipelineNotFoundException *interface{}
	StatusCode                int64
	TaskNotFoundException     *interface{}
}
