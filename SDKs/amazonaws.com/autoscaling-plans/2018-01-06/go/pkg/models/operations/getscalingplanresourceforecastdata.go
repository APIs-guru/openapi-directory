package operations

import (
	"openapi/pkg/models/shared"
)

type GetScalingPlanResourceForecastDataXAmzTargetEnum string

const (
	GetScalingPlanResourceForecastDataXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData GetScalingPlanResourceForecastDataXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
)

type GetScalingPlanResourceForecastDataHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetScalingPlanResourceForecastDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetScalingPlanResourceForecastDataRequest struct {
	Headers GetScalingPlanResourceForecastDataHeaders
	Request shared.GetScalingPlanResourceForecastDataRequest `request:"mediaType=application/json"`
}

type GetScalingPlanResourceForecastDataResponse struct {
	ContentType                                string
	GetScalingPlanResourceForecastDataResponse *shared.GetScalingPlanResourceForecastDataResponse
	InternalServiceException                   *interface{}
	StatusCode                                 int64
	ValidationException                        *interface{}
}
