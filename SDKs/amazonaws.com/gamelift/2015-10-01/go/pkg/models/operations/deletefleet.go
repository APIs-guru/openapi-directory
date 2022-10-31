package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFleetXAmzTargetEnum string

const (
	DeleteFleetXAmzTargetEnumGameLiftDeleteFleet DeleteFleetXAmzTargetEnum = "GameLift.DeleteFleet"
)

type DeleteFleetHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteFleetRequest struct {
	Headers DeleteFleetHeaders
	Request shared.DeleteFleetInput `request:"mediaType=application/json"`
}

type DeleteFleetResponse struct {
	ContentType                 string
	InternalServiceException    *interface{}
	InvalidFleetStatusException *interface{}
	InvalidRequestException     *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	TaggingFailedException      *interface{}
	UnauthorizedException       *interface{}
}
