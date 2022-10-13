package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTunnelXAmzTargetEnum string

const (
	DescribeTunnelXAmzTargetEnumIoTSecuredTunnelingDescribeTunnel DescribeTunnelXAmzTargetEnum = "IoTSecuredTunneling.DescribeTunnel"
)

type DescribeTunnelHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTunnelXAmzTargetEnum `header:"name=X-Amz-Target"`
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
