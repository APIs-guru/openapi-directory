package operations

import (
	"openapi/pkg/models/shared"
)

type ExportLambdaFunctionRecommendationsXAmzTargetEnum string

const (
	ExportLambdaFunctionRecommendationsXAmzTargetEnumComputeOptimizerServiceExportLambdaFunctionRecommendations ExportLambdaFunctionRecommendationsXAmzTargetEnum = "ComputeOptimizerService.ExportLambdaFunctionRecommendations"
)

type ExportLambdaFunctionRecommendationsHeaders struct {
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportLambdaFunctionRecommendationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
