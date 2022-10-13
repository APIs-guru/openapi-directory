package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateHostedConnectionXAmzTargetEnum string

const (
	AssociateHostedConnectionXAmzTargetEnumOvertureServiceAssociateHostedConnection AssociateHostedConnectionXAmzTargetEnum = "OvertureService.AssociateHostedConnection"
)

type AssociateHostedConnectionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateHostedConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateHostedConnectionRequest struct {
	Headers AssociateHostedConnectionHeaders
	Request shared.AssociateHostedConnectionRequest `request:"mediaType=application/json"`
}

type AssociateHostedConnectionResponse struct {
	Connection                   *shared.Connection
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
