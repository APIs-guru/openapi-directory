package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFleetCapacityXAmzTargetEnum string

const (
	UpdateFleetCapacityXAmzTargetEnumGameLiftUpdateFleetCapacity UpdateFleetCapacityXAmzTargetEnum = "GameLift.UpdateFleetCapacity"
)

type UpdateFleetCapacityHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFleetCapacityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFleetCapacityRequest struct {
	Headers UpdateFleetCapacityHeaders
	Request shared.UpdateFleetCapacityInput `request:"mediaType=application/json"`
}

type UpdateFleetCapacityResponse struct {
	ConflictException           *interface{}
	ContentType                 string
	InternalServiceException    *interface{}
	InvalidFleetStatusException *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
	UpdateFleetCapacityOutput   *shared.UpdateFleetCapacityOutput
}
