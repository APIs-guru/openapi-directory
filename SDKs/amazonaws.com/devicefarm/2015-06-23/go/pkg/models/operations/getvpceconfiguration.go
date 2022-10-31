package operations

import (
	"openapi/pkg/models/shared"
)

type GetVpceConfigurationXAmzTargetEnum string

const (
	GetVpceConfigurationXAmzTargetEnumDeviceFarm20150623GetVpceConfiguration GetVpceConfigurationXAmzTargetEnum = "DeviceFarm_20150623.GetVPCEConfiguration"
)

type GetVpceConfigurationHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetVpceConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
