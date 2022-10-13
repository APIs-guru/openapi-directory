package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateComponentConfigurationXAmzTargetEnum string

const (
	UpdateComponentConfigurationXAmzTargetEnumEc2WindowsBarleyServiceUpdateComponentConfiguration UpdateComponentConfigurationXAmzTargetEnum = "EC2WindowsBarleyService.UpdateComponentConfiguration"
)

type UpdateComponentConfigurationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateComponentConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
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
