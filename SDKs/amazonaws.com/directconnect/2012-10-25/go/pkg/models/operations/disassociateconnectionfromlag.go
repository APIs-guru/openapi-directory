package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateConnectionFromLagXAmzTargetEnum string

const (
	DisassociateConnectionFromLagXAmzTargetEnumOvertureServiceDisassociateConnectionFromLag DisassociateConnectionFromLagXAmzTargetEnum = "OvertureService.DisassociateConnectionFromLag"
)

type DisassociateConnectionFromLagHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateConnectionFromLagXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociateConnectionFromLagRequest struct {
	Headers DisassociateConnectionFromLagHeaders
	Request shared.DisassociateConnectionFromLagRequest `request:"mediaType=application/json"`
}

type DisassociateConnectionFromLagResponse struct {
	Connection                   *shared.Connection
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
