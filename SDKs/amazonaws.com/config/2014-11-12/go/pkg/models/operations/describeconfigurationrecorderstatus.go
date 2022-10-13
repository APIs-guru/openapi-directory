package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConfigurationRecorderStatusXAmzTargetEnum string

const (
	DescribeConfigurationRecorderStatusXAmzTargetEnumStarlingDoveServiceDescribeConfigurationRecorderStatus DescribeConfigurationRecorderStatusXAmzTargetEnum = "StarlingDoveService.DescribeConfigurationRecorderStatus"
)

type DescribeConfigurationRecorderStatusHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConfigurationRecorderStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConfigurationRecorderStatusRequest struct {
	Headers DescribeConfigurationRecorderStatusHeaders
	Request shared.DescribeConfigurationRecorderStatusRequest `request:"mediaType=application/json"`
}

type DescribeConfigurationRecorderStatusResponse struct {
	ContentType                                 string
	DescribeConfigurationRecorderStatusResponse *shared.DescribeConfigurationRecorderStatusResponse
	NoSuchConfigurationRecorderException        *interface{}
	StatusCode                                  int64
}
