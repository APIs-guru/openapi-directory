package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVpceConfigurationXAmzTargetEnum string

const (
	CreateVpceConfigurationXAmzTargetEnumDeviceFarm20150623CreateVpceConfiguration CreateVpceConfigurationXAmzTargetEnum = "DeviceFarm_20150623.CreateVPCEConfiguration"
)

type CreateVpceConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateVpceConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateVpceConfigurationRequest struct {
	Headers CreateVpceConfigurationHeaders
	Request shared.CreateVpceConfigurationRequest `request:"mediaType=application/json"`
}

type CreateVpceConfigurationResponse struct {
	ArgumentException             *interface{}
	ContentType                   string
	CreateVpceConfigurationResult *shared.CreateVpceConfigurationResult
	LimitExceededException        *interface{}
	ServiceAccountException       *interface{}
	StatusCode                    int64
}
