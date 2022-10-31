package operations

import (
	"openapi/pkg/models/shared"
)

type PutRetentionConfigurationXAmzTargetEnum string

const (
	PutRetentionConfigurationXAmzTargetEnumStarlingDoveServicePutRetentionConfiguration PutRetentionConfigurationXAmzTargetEnum = "StarlingDoveService.PutRetentionConfiguration"
)

type PutRetentionConfigurationHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRetentionConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutRetentionConfigurationRequest struct {
	Headers PutRetentionConfigurationHeaders
	Request shared.PutRetentionConfigurationRequest `request:"mediaType=application/json"`
}

type PutRetentionConfigurationResponse struct {
	ContentType                                         string
	InvalidParameterValueException                      *interface{}
	MaxNumberOfRetentionConfigurationsExceededException *interface{}
	PutRetentionConfigurationResponse                   *shared.PutRetentionConfigurationResponse
	StatusCode                                          int64
}
