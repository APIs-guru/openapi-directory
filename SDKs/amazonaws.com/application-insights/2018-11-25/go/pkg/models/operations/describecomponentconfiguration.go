package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeComponentConfigurationXAmzTargetEnum string

const (
	DescribeComponentConfigurationXAmzTargetEnumEc2WindowsBarleyServiceDescribeComponentConfiguration DescribeComponentConfigurationXAmzTargetEnum = "EC2WindowsBarleyService.DescribeComponentConfiguration"
)

type DescribeComponentConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeComponentConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeComponentConfigurationRequest struct {
	Headers DescribeComponentConfigurationHeaders
	Request shared.DescribeComponentConfigurationRequest `request:"mediaType=application/json"`
}

type DescribeComponentConfigurationResponse struct {
	ContentType                            string
	DescribeComponentConfigurationResponse *shared.DescribeComponentConfigurationResponse
	InternalServerException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ValidationException                    *interface{}
}
