package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePrivateVirtualInterfaceXAmzTargetEnum string

const (
	CreatePrivateVirtualInterfaceXAmzTargetEnumOvertureServiceCreatePrivateVirtualInterface CreatePrivateVirtualInterfaceXAmzTargetEnum = "OvertureService.CreatePrivateVirtualInterface"
)

type CreatePrivateVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePrivateVirtualInterfaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePrivateVirtualInterfaceRequest struct {
	Headers CreatePrivateVirtualInterfaceHeaders
	Request shared.CreatePrivateVirtualInterfaceRequest `request:"mediaType=application/json"`
}

type CreatePrivateVirtualInterfaceResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	DuplicateTagKeysException    *interface{}
	StatusCode                   int64
	TooManyTagsException         *interface{}
	VirtualInterface             *shared.VirtualInterface
}
