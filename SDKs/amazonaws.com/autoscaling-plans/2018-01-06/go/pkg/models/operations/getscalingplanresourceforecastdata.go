package operations

import (
	"openapi/pkg/models/shared"
)

type GetScalingPlanResourceForecastDataXAmzTargetEnum string

const (
	GetScalingPlanResourceForecastDataXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData GetScalingPlanResourceForecastDataXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
)

type GetScalingPlanResourceForecastDataHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetScalingPlanResourceForecastDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
