package operations

import (
	"openapi/pkg/models/shared"
)

type GetVpceConfigurationXAmzTargetEnum string

const (
	GetVpceConfigurationXAmzTargetEnumDeviceFarm20150623GetVpceConfiguration GetVpceConfigurationXAmzTargetEnum = "DeviceFarm_20150623.GetVPCEConfiguration"
)

type GetVpceConfigurationHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetVpceConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetVpceConfigurationRequest struct {
	Headers GetVpceConfigurationHeaders
	Request shared.GetVpceConfigurationRequest `request:"mediaType=application/json"`
}

type GetVpceConfigurationResponse struct {
	ArgumentException          *interface{}
	ContentType                string
	GetVpceConfigurationResult *shared.GetVpceConfigurationResult
	NotFoundException          *interface{}
	ServiceAccountException    *interface{}
	StatusCode                 int64
}
