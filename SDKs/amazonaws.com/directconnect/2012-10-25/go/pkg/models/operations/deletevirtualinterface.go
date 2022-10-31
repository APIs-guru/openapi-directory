package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVirtualInterfaceXAmzTargetEnum string

const (
	DeleteVirtualInterfaceXAmzTargetEnumOvertureServiceDeleteVirtualInterface DeleteVirtualInterfaceXAmzTargetEnum = "OvertureService.DeleteVirtualInterface"
)

type DeleteVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVirtualInterfaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
