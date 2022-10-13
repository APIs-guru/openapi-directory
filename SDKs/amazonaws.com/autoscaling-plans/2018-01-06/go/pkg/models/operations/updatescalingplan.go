package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateScalingPlanXAmzTargetEnum string

const (
	UpdateScalingPlanXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceUpdateScalingPlan UpdateScalingPlanXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan"
)

type UpdateScalingPlanHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateScalingPlanXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateScalingPlanRequest struct {
	Headers UpdateScalingPlanHeaders
	Request shared.UpdateScalingPlanRequest `request:"mediaType=application/json"`
}

type UpdateScalingPlanResponse struct {
	ConcurrentUpdateException *interface{}
	ContentType               string
	InternalServiceException  *interface{}
	ObjectNotFoundException   *interface{}
	StatusCode                int64
	UpdateScalingPlanResponse map[string]interface{}
	ValidationException       *interface{}
}
