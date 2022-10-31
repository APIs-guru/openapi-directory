package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVpceConfigurationXAmzTargetEnum string

const (
	DeleteVpceConfigurationXAmzTargetEnumDeviceFarm20150623DeleteVpceConfiguration DeleteVpceConfigurationXAmzTargetEnum = "DeviceFarm_20150623.DeleteVPCEConfiguration"
)

type DeleteVpceConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVpceConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteVpceConfigurationRequest struct {
	Headers DeleteVpceConfigurationHeaders
	Request shared.DeleteVpceConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteVpceConfigurationResponse struct {
	ArgumentException             *interface{}
	ContentType                   string
	DeleteVpceConfigurationResult map[string]interface{}
	InvalidOperationException     *interface{}
	NotFoundException             *interface{}
	ServiceAccountException       *interface{}
	StatusCode                    int64
}
