package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateScalingPlanXAmzTargetEnum string

const (
	UpdateScalingPlanXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceUpdateScalingPlan UpdateScalingPlanXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan"
)

type UpdateScalingPlanHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateScalingPlanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
