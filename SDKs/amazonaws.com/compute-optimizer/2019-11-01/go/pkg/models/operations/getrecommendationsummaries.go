package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecommendationSummariesXAmzTargetEnum string

const (
	GetRecommendationSummariesXAmzTargetEnumComputeOptimizerServiceGetRecommendationSummaries GetRecommendationSummariesXAmzTargetEnum = "ComputeOptimizerService.GetRecommendationSummaries"
)

type GetRecommendationSummariesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRecommendationSummariesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
