package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRuntimeConfigurationXAmzTargetEnum string

const (
	DescribeRuntimeConfigurationXAmzTargetEnumGameLiftDescribeRuntimeConfiguration DescribeRuntimeConfigurationXAmzTargetEnum = "GameLift.DescribeRuntimeConfiguration"
)

type DescribeRuntimeConfigurationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRuntimeConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRuntimeConfigurationRequest struct {
	Headers DescribeRuntimeConfigurationHeaders
	Request shared.DescribeRuntimeConfigurationInput `request:"mediaType=application/json"`
}

type DescribeRuntimeConfigurationResponse struct {
	ContentType                        string
	DescribeRuntimeConfigurationOutput *shared.DescribeRuntimeConfigurationOutput
	InternalServiceException           *interface{}
	InvalidRequestException            *interface{}
	NotFoundException                  *interface{}
	StatusCode                         int64
	UnauthorizedException              *interface{}
}
