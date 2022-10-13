package operations

import (
	"openapi/pkg/models/shared"
)

type ListVpceConfigurationsXAmzTargetEnum string

const (
	ListVpceConfigurationsXAmzTargetEnumDeviceFarm20150623ListVpceConfigurations ListVpceConfigurationsXAmzTargetEnum = "DeviceFarm_20150623.ListVPCEConfigurations"
)

type ListVpceConfigurationsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListVpceConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListVpceConfigurationsRequest struct {
	Headers ListVpceConfigurationsHeaders
	Request shared.ListVpceConfigurationsRequest `request:"mediaType=application/json"`
}

type ListVpceConfigurationsResponse struct {
	ArgumentException            *interface{}
	ContentType                  string
	ListVpceConfigurationsResult *shared.ListVpceConfigurationsResult
	ServiceAccountException      *interface{}
	StatusCode                   int64
}
