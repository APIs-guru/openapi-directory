package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVpceConfigurationXAmzTargetEnum string

const (
	UpdateVpceConfigurationXAmzTargetEnumDeviceFarm20150623UpdateVpceConfiguration UpdateVpceConfigurationXAmzTargetEnum = "DeviceFarm_20150623.UpdateVPCEConfiguration"
)

type UpdateVpceConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateVpceConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateVpceConfigurationRequest struct {
	Headers UpdateVpceConfigurationHeaders
	Request shared.UpdateVpceConfigurationRequest `request:"mediaType=application/json"`
}

type UpdateVpceConfigurationResponse struct {
	ArgumentException             *interface{}
	ContentType                   string
	InvalidOperationException     *interface{}
	NotFoundException             *interface{}
	ServiceAccountException       *interface{}
	StatusCode                    int64
	UpdateVpceConfigurationResult *shared.UpdateVpceConfigurationResult
}
