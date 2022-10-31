package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateComponentConfigurationXAmzTargetEnum string

const (
	UpdateComponentConfigurationXAmzTargetEnumEc2WindowsBarleyServiceUpdateComponentConfiguration UpdateComponentConfigurationXAmzTargetEnum = "EC2WindowsBarleyService.UpdateComponentConfiguration"
)

type UpdateComponentConfigurationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateComponentConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateComponentConfigurationRequest struct {
	Headers UpdateComponentConfigurationHeaders
	Request shared.UpdateComponentConfigurationRequest `request:"mediaType=application/json"`
}

type UpdateComponentConfigurationResponse struct {
	ContentType                          string
	InternalServerException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	UpdateComponentConfigurationResponse map[string]interface{}
	ValidationException                  *interface{}
}
