package operations

import (
	"openapi/pkg/models/shared"
)

type ExportLambdaFunctionRecommendationsXAmzTargetEnum string

const (
	ExportLambdaFunctionRecommendationsXAmzTargetEnumComputeOptimizerServiceExportLambdaFunctionRecommendations ExportLambdaFunctionRecommendationsXAmzTargetEnum = "ComputeOptimizerService.ExportLambdaFunctionRecommendations"
)

type ExportLambdaFunctionRecommendationsHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportLambdaFunctionRecommendationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExportLambdaFunctionRecommendationsRequest struct {
	Headers ExportLambdaFunctionRecommendationsHeaders
	Request shared.ExportLambdaFunctionRecommendationsRequest `request:"mediaType=application/json"`
}

type ExportLambdaFunctionRecommendationsResponse struct {
	AccessDeniedException                       *interface{}
	ContentType                                 string
	ExportLambdaFunctionRecommendationsResponse *shared.ExportLambdaFunctionRecommendationsResponse
	InternalServerException                     *interface{}
	InvalidParameterValueException              *interface{}
	LimitExceededException                      *interface{}
	MissingAuthenticationToken                  *interface{}
	OptInRequiredException                      *interface{}
	ServiceUnavailableException                 *interface{}
	StatusCode                                  int64
	ThrottlingException                         *interface{}
}
