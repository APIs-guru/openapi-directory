package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateVirtualInterfaceXAmzTargetEnum string

const (
	AssociateVirtualInterfaceXAmzTargetEnumOvertureServiceAssociateVirtualInterface AssociateVirtualInterfaceXAmzTargetEnum = "OvertureService.AssociateVirtualInterface"
)

type AssociateVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateVirtualInterfaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateVirtualInterfaceRequest struct {
	Headers AssociateVirtualInterfaceHeaders
	Request shared.AssociateVirtualInterfaceRequest `request:"mediaType=application/json"`
}

type AssociateVirtualInterfaceResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
	VirtualInterface             *shared.VirtualInterface
}
