package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateFleetXAmzTargetEnum string

const (
	DisassociateFleetXAmzTargetEnumPhotonAdminProxyServiceDisassociateFleet DisassociateFleetXAmzTargetEnum = "PhotonAdminProxyService.DisassociateFleet"
)

type DisassociateFleetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateFleetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateFleetRequest struct {
	Headers DisassociateFleetHeaders
	Request shared.DisassociateFleetRequest `request:"mediaType=application/json"`
}

type DisassociateFleetResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DisassociateFleetResult         map[string]interface{}
	OperationNotPermittedException  *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
