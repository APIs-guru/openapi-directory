package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVirtualInterfacesXAmzTargetEnum string

const (
	DescribeVirtualInterfacesXAmzTargetEnumOvertureServiceDescribeVirtualInterfaces DescribeVirtualInterfacesXAmzTargetEnum = "OvertureService.DescribeVirtualInterfaces"
)

type DescribeVirtualInterfacesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeVirtualInterfacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeVirtualInterfacesRequest struct {
	Headers DescribeVirtualInterfacesHeaders
	Request shared.DescribeVirtualInterfacesRequest `request:"mediaType=application/json"`
}

type DescribeVirtualInterfacesResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
	VirtualInterfaces            *shared.VirtualInterfaces
}
