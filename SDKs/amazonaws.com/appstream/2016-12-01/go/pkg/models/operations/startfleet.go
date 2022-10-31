package operations

import (
	"openapi/pkg/models/shared"
)

type StartFleetXAmzTargetEnum string

const (
	StartFleetXAmzTargetEnumPhotonAdminProxyServiceStartFleet StartFleetXAmzTargetEnum = "PhotonAdminProxyService.StartFleet"
)

type StartFleetHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartFleetRequest struct {
	Headers StartFleetHeaders
	Request shared.StartFleetRequest `request:"mediaType=application/json"`
}

type StartFleetResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidAccountStatusException   *interface{}
	InvalidRoleException            *interface{}
	LimitExceededException          *interface{}
	OperationNotPermittedException  *interface{}
	RequestLimitExceededException   *interface{}
	ResourceNotAvailableException   *interface{}
	ResourceNotFoundException       *interface{}
	StartFleetResult                map[string]interface{}
	StatusCode                      int64
}
