package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAutoScalingConfigurationXAmzTargetEnum string

const (
	DescribeAutoScalingConfigurationXAmzTargetEnumAppRunnerDescribeAutoScalingConfiguration DescribeAutoScalingConfigurationXAmzTargetEnum = "AppRunner.DescribeAutoScalingConfiguration"
)

type DescribeAutoScalingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAutoScalingConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAutoScalingConfigurationRequest struct {
	Headers DescribeAutoScalingConfigurationHeaders
	Request shared.DescribeAutoScalingConfigurationRequest `request:"mediaType=application/json"`
}

type DescribeAutoScalingConfigurationResponse struct {
	ContentType                              string
	DescribeAutoScalingConfigurationResponse *shared.DescribeAutoScalingConfigurationResponse
	InternalServiceErrorException            *interface{}
	InvalidRequestException                  *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
