package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateFleetXAmzTargetEnum string

const (
	DisassociateFleetXAmzTargetEnumPhotonAdminProxyServiceDisassociateFleet DisassociateFleetXAmzTargetEnum = "PhotonAdminProxyService.DisassociateFleet"
)

type DisassociateFleetHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
