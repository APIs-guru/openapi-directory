package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateHostedConnectionXAmzTargetEnum string

const (
	AssociateHostedConnectionXAmzTargetEnumOvertureServiceAssociateHostedConnection AssociateHostedConnectionXAmzTargetEnum = "OvertureService.AssociateHostedConnection"
)

type AssociateHostedConnectionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateHostedConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
