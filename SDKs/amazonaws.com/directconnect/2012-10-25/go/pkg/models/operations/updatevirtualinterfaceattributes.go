package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVirtualInterfaceAttributesXAmzTargetEnum string

const (
	UpdateVirtualInterfaceAttributesXAmzTargetEnumOvertureServiceUpdateVirtualInterfaceAttributes UpdateVirtualInterfaceAttributesXAmzTargetEnum = "OvertureService.UpdateVirtualInterfaceAttributes"
)

type UpdateVirtualInterfaceAttributesHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateVirtualInterfaceAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateVirtualInterfaceAttributesRequest struct {
	Headers UpdateVirtualInterfaceAttributesHeaders
	Request shared.UpdateVirtualInterfaceAttributesRequest `request:"mediaType=application/json"`
}

type UpdateVirtualInterfaceAttributesResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
	VirtualInterface             *shared.VirtualInterface
}
