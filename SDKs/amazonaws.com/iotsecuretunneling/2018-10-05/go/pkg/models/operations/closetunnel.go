package operations

import (
	"openapi/pkg/models/shared"
)

type CloseTunnelXAmzTargetEnum string

const (
	CloseTunnelXAmzTargetEnumIoTSecuredTunnelingCloseTunnel CloseTunnelXAmzTargetEnum = "IoTSecuredTunneling.CloseTunnel"
)

type CloseTunnelHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CloseTunnelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CloseTunnelRequest struct {
	Headers CloseTunnelHeaders
	Request shared.CloseTunnelRequest `request:"mediaType=application/json"`
}

type CloseTunnelResponse struct {
	CloseTunnelResponse       map[string]interface{}
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
