package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFleetXAmzTargetEnum string

const (
	CreateFleetXAmzTargetEnumPhotonAdminProxyServiceCreateFleet CreateFleetXAmzTargetEnum = "PhotonAdminProxyService.CreateFleet"
)

type CreateFleetHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFleetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFleetRequest struct {
	Headers CreateFleetHeaders
	Request shared.CreateFleetRequest `request:"mediaType=application/json"`
}

type CreateFleetResponse struct {
	ConcurrentModificationException      *interface{}
	ContentType                          string
	CreateFleetResult                    *shared.CreateFleetResult
	IncompatibleImageException           *interface{}
	InvalidAccountStatusException        *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidRoleException                 *interface{}
	LimitExceededException               *interface{}
	OperationNotPermittedException       *interface{}
	RequestLimitExceededException        *interface{}
	ResourceAlreadyExistsException       *interface{}
	ResourceNotAvailableException        *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
