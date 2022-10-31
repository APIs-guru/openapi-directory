package operations

import (
	"openapi/pkg/models/shared"
)

type CreateScalingPlanXAmzTargetEnum string

const (
	CreateScalingPlanXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceCreateScalingPlan CreateScalingPlanXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.CreateScalingPlan"
)

type CreateScalingPlanHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateScalingPlanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateScalingPlanRequest struct {
	Headers CreateScalingPlanHeaders
	Request shared.CreateScalingPlanRequest `request:"mediaType=application/json"`
}

type CreateScalingPlanResponse struct {
	ConcurrentUpdateException *interface{}
	ContentType               string
	CreateScalingPlanResponse *shared.CreateScalingPlanResponse
	InternalServiceException  *interface{}
	LimitExceededException    *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
