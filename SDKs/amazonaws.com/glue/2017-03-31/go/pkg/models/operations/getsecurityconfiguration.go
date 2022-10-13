package operations

import (
	"openapi/pkg/models/shared"
)

type GetSecurityConfigurationXAmzTargetEnum string

const (
	GetSecurityConfigurationXAmzTargetEnumAwsGlueGetSecurityConfiguration GetSecurityConfigurationXAmzTargetEnum = "AWSGlue.GetSecurityConfiguration"
)

type GetSecurityConfigurationHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSecurityConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSecurityConfigurationRequest struct {
	Headers GetSecurityConfigurationHeaders
	Request shared.GetSecurityConfigurationRequest `request:"mediaType=application/json"`
}

type GetSecurityConfigurationResponse struct {
	ContentType                      string
	EntityNotFoundException          *interface{}
	GetSecurityConfigurationResponse *shared.GetSecurityConfigurationResponse
	InternalServiceException         *interface{}
	InvalidInputException            *interface{}
	OperationTimeoutException        *interface{}
	StatusCode                       int64
}
