package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmPublicVirtualInterfaceXAmzTargetEnum string

const (
	ConfirmPublicVirtualInterfaceXAmzTargetEnumOvertureServiceConfirmPublicVirtualInterface ConfirmPublicVirtualInterfaceXAmzTargetEnum = "OvertureService.ConfirmPublicVirtualInterface"
)

type ConfirmPublicVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ConfirmPublicVirtualInterfaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ConfirmPublicVirtualInterfaceRequest struct {
	Headers ConfirmPublicVirtualInterfaceHeaders
	Request shared.ConfirmPublicVirtualInterfaceRequest `request:"mediaType=application/json"`
}

type ConfirmPublicVirtualInterfaceResponse struct {
	ConfirmPublicVirtualInterfaceResponse *shared.ConfirmPublicVirtualInterfaceResponse
	ContentType                           string
	DirectConnectClientException          *interface{}
	DirectConnectServerException          *interface{}
	StatusCode                            int64
}
