package operations

import (
	"openapi/pkg/models/shared"
)

type EvaluateExpressionXAmzTargetEnum string

const (
	EvaluateExpressionXAmzTargetEnumDataPipelineEvaluateExpression EvaluateExpressionXAmzTargetEnum = "DataPipeline.EvaluateExpression"
)

type EvaluateExpressionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EvaluateExpressionXAmzTargetEnum `header:"name=X-Amz-Target"`
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
