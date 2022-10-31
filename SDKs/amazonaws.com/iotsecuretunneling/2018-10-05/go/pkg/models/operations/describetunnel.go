package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTunnelXAmzTargetEnum string

const (
	DescribeTunnelXAmzTargetEnumIoTSecuredTunnelingDescribeTunnel DescribeTunnelXAmzTargetEnum = "IoTSecuredTunneling.DescribeTunnel"
)

type DescribeTunnelHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTunnelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeTunnelRequest struct {
	Headers DescribeTunnelHeaders
	Request shared.DescribeTunnelRequest `request:"mediaType=application/json"`
}

type DescribeTunnelResponse struct {
	ContentType               string
	DescribeTunnelResponse    *shared.DescribeTunnelResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
