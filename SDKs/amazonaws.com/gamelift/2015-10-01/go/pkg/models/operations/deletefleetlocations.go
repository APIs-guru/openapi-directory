package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFleetLocationsXAmzTargetEnum string

const (
	DeleteFleetLocationsXAmzTargetEnumGameLiftDeleteFleetLocations DeleteFleetLocationsXAmzTargetEnum = "GameLift.DeleteFleetLocations"
)

type DeleteFleetLocationsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFleetLocationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFleetLocationsRequest struct {
	Headers DeleteFleetLocationsHeaders
	Request shared.DeleteFleetLocationsInput `request:"mediaType=application/json"`
}

type DeleteFleetLocationsResponse struct {
	ContentType                string
	DeleteFleetLocationsOutput *shared.DeleteFleetLocationsOutput
	InternalServiceException   *interface{}
	InvalidRequestException    *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
	UnauthorizedException      *interface{}
}
