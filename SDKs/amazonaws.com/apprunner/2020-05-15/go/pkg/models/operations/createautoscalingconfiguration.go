package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAutoScalingConfigurationXAmzTargetEnum string

const (
	CreateAutoScalingConfigurationXAmzTargetEnumAppRunnerCreateAutoScalingConfiguration CreateAutoScalingConfigurationXAmzTargetEnum = "AppRunner.CreateAutoScalingConfiguration"
)

type CreateAutoScalingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAutoScalingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAutoScalingConfigurationRequest struct {
	Headers CreateAutoScalingConfigurationHeaders
	Request shared.CreateAutoScalingConfigurationRequest `request:"mediaType=application/json"`
}

type CreateAutoScalingConfigurationResponse struct {
	ContentType                            string
	CreateAutoScalingConfigurationResponse *shared.CreateAutoScalingConfigurationResponse
	InternalServiceErrorException          *interface{}
	InvalidRequestException                *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
}
