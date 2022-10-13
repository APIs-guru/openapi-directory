package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVirtualInterfaceXAmzTargetEnum string

const (
	DeleteVirtualInterfaceXAmzTargetEnumOvertureServiceDeleteVirtualInterface DeleteVirtualInterfaceXAmzTargetEnum = "OvertureService.DeleteVirtualInterface"
)

type DeleteVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVirtualInterfaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteVirtualInterfaceRequest struct {
	Headers DeleteVirtualInterfaceHeaders
	Request shared.DeleteVirtualInterfaceRequest `request:"mediaType=application/json"`
}

type DeleteVirtualInterfaceResponse struct {
	ContentType                    string
	DeleteVirtualInterfaceResponse *shared.DeleteVirtualInterfaceResponse
	DirectConnectClientException   *interface{}
	DirectConnectServerException   *interface{}
	StatusCode                     int64
}
