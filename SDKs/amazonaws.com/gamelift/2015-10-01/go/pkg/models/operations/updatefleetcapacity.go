package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFleetCapacityXAmzTargetEnum string

const (
	UpdateFleetCapacityXAmzTargetEnumGameLiftUpdateFleetCapacity UpdateFleetCapacityXAmzTargetEnum = "GameLift.UpdateFleetCapacity"
)

type UpdateFleetCapacityHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFleetCapacityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
