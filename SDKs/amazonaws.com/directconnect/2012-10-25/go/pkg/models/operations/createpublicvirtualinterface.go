package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePublicVirtualInterfaceXAmzTargetEnum string

const (
	CreatePublicVirtualInterfaceXAmzTargetEnumOvertureServiceCreatePublicVirtualInterface CreatePublicVirtualInterfaceXAmzTargetEnum = "OvertureService.CreatePublicVirtualInterface"
)

type CreatePublicVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePublicVirtualInterfaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
