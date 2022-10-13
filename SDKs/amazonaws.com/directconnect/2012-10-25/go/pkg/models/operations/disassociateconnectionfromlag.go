package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateConnectionFromLagXAmzTargetEnum string

const (
	DisassociateConnectionFromLagXAmzTargetEnumOvertureServiceDisassociateConnectionFromLag DisassociateConnectionFromLagXAmzTargetEnum = "OvertureService.DisassociateConnectionFromLag"
)

type DisassociateConnectionFromLagHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateConnectionFromLagXAmzTargetEnum `header:"name=X-Amz-Target"`
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
