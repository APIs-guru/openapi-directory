package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFleetLocationsXAmzTargetEnum string

const (
	CreateFleetLocationsXAmzTargetEnumGameLiftCreateFleetLocations CreateFleetLocationsXAmzTargetEnum = "GameLift.CreateFleetLocations"
)

type CreateFleetLocationsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFleetLocationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFleetLocationsRequest struct {
	Headers CreateFleetLocationsHeaders
	Request shared.CreateFleetLocationsInput `request:"mediaType=application/json"`
}

type CreateFleetLocationsResponse struct {
	ContentType                 string
	CreateFleetLocationsOutput  *shared.CreateFleetLocationsOutput
	InternalServiceException    *interface{}
	InvalidFleetStatusException *interface{}
	InvalidRequestException     *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
}
