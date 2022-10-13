package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePublicVirtualInterfaceXAmzTargetEnum string

const (
	CreatePublicVirtualInterfaceXAmzTargetEnumOvertureServiceCreatePublicVirtualInterface CreatePublicVirtualInterfaceXAmzTargetEnum = "OvertureService.CreatePublicVirtualInterface"
)

type CreatePublicVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePublicVirtualInterfaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePublicVirtualInterfaceRequest struct {
	Headers CreatePublicVirtualInterfaceHeaders
	Request shared.CreatePublicVirtualInterfaceRequest `request:"mediaType=application/json"`
}

type CreatePublicVirtualInterfaceResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	DuplicateTagKeysException    *interface{}
	StatusCode                   int64
	TooManyTagsException         *interface{}
	VirtualInterface             *shared.VirtualInterface
}
