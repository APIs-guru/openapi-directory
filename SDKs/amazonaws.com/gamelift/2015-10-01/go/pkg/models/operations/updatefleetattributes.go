package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFleetAttributesXAmzTargetEnum string

const (
	UpdateFleetAttributesXAmzTargetEnumGameLiftUpdateFleetAttributes UpdateFleetAttributesXAmzTargetEnum = "GameLift.UpdateFleetAttributes"
)

type UpdateFleetAttributesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFleetAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFleetAttributesRequest struct {
	Headers UpdateFleetAttributesHeaders
	Request shared.UpdateFleetAttributesInput `request:"mediaType=application/json"`
}

type UpdateFleetAttributesResponse struct {
	ConflictException           *interface{}
	ContentType                 string
	InternalServiceException    *interface{}
	InvalidFleetStatusException *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
	UpdateFleetAttributesOutput *shared.UpdateFleetAttributesOutput
}
