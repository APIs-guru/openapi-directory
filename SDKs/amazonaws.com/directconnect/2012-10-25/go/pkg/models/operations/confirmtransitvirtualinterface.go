package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmTransitVirtualInterfaceXAmzTargetEnum string

const (
	ConfirmTransitVirtualInterfaceXAmzTargetEnumOvertureServiceConfirmTransitVirtualInterface ConfirmTransitVirtualInterfaceXAmzTargetEnum = "OvertureService.ConfirmTransitVirtualInterface"
)

type ConfirmTransitVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ConfirmTransitVirtualInterfaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ConfirmTransitVirtualInterfaceRequest struct {
	Headers ConfirmTransitVirtualInterfaceHeaders
	Request shared.ConfirmTransitVirtualInterfaceRequest `request:"mediaType=application/json"`
}

type ConfirmTransitVirtualInterfaceResponse struct {
	ConfirmTransitVirtualInterfaceResponse *shared.ConfirmTransitVirtualInterfaceResponse
	ContentType                            string
	DirectConnectClientException           *interface{}
	DirectConnectServerException           *interface{}
	StatusCode                             int64
}
