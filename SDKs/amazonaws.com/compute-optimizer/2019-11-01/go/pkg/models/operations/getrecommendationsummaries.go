package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecommendationSummariesXAmzTargetEnum string

const (
	GetRecommendationSummariesXAmzTargetEnumComputeOptimizerServiceGetRecommendationSummaries GetRecommendationSummariesXAmzTargetEnum = "ComputeOptimizerService.GetRecommendationSummaries"
)

type GetRecommendationSummariesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRecommendationSummariesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRecommendationSummariesRequest struct {
	Headers GetRecommendationSummariesHeaders
	Request shared.GetRecommendationSummariesRequest `request:"mediaType=application/json"`
}

type GetRecommendationSummariesResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	GetRecommendationSummariesResponse *shared.GetRecommendationSummariesResponse
	InternalServerException            *interface{}
	InvalidParameterValueException     *interface{}
	MissingAuthenticationToken         *interface{}
	OptInRequiredException             *interface{}
	ServiceUnavailableException        *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}
