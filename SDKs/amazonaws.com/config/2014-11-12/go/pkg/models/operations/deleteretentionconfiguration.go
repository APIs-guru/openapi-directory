package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRetentionConfigurationXAmzTargetEnum string

const (
	DeleteRetentionConfigurationXAmzTargetEnumStarlingDoveServiceDeleteRetentionConfiguration DeleteRetentionConfigurationXAmzTargetEnum = "StarlingDoveService.DeleteRetentionConfiguration"
)

type DeleteRetentionConfigurationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRetentionConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRetentionConfigurationRequest struct {
	Headers DeleteRetentionConfigurationHeaders
	Request shared.DeleteRetentionConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteRetentionConfigurationResponse struct {
	ContentType                           string
	InvalidParameterValueException        *interface{}
	NoSuchRetentionConfigurationException *interface{}
	StatusCode                            int64
}
