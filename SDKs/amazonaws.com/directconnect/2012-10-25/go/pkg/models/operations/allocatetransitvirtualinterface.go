package operations

import (
	"openapi/pkg/models/shared"
)

type AllocateTransitVirtualInterfaceXAmzTargetEnum string

const (
	AllocateTransitVirtualInterfaceXAmzTargetEnumOvertureServiceAllocateTransitVirtualInterface AllocateTransitVirtualInterfaceXAmzTargetEnum = "OvertureService.AllocateTransitVirtualInterface"
)

type AllocateTransitVirtualInterfaceHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AllocateTransitVirtualInterfaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AllocateTransitVirtualInterfaceRequest struct {
	Headers AllocateTransitVirtualInterfaceHeaders
	Request shared.AllocateTransitVirtualInterfaceRequest `request:"mediaType=application/json"`
}

type AllocateTransitVirtualInterfaceResponse struct {
	AllocateTransitVirtualInterfaceResult *shared.AllocateTransitVirtualInterfaceResult
	ContentType                           string
	DirectConnectClientException          *interface{}
	DirectConnectServerException          *interface{}
	DuplicateTagKeysException             *interface{}
	StatusCode                            int64
	TooManyTagsException                  *interface{}
}
