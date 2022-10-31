package operations

import (
	"openapi/pkg/models/shared"
)

type GetLambdaFunctionRecommendationsXAmzTargetEnum string

const (
	GetLambdaFunctionRecommendationsXAmzTargetEnumComputeOptimizerServiceGetLambdaFunctionRecommendations GetLambdaFunctionRecommendationsXAmzTargetEnum = "ComputeOptimizerService.GetLambdaFunctionRecommendations"
)

type GetLambdaFunctionRecommendationsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLambdaFunctionRecommendationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetLambdaFunctionRecommendationsRequest struct {
	Headers GetLambdaFunctionRecommendationsHeaders
	Request shared.GetLambdaFunctionRecommendationsRequest `request:"mediaType=application/json"`
}

type GetLambdaFunctionRecommendationsResponse struct {
	AccessDeniedException                    *interface{}
	ContentType                              string
	GetLambdaFunctionRecommendationsResponse *shared.GetLambdaFunctionRecommendationsResponse
	InternalServerException                  *interface{}
	InvalidParameterValueException           *interface{}
	LimitExceededException                   *interface{}
	MissingAuthenticationToken               *interface{}
	OptInRequiredException                   *interface{}
	ServiceUnavailableException              *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
}
