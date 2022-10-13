package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConfigurationRecordersXAmzTargetEnum string

const (
	DescribeConfigurationRecordersXAmzTargetEnumStarlingDoveServiceDescribeConfigurationRecorders DescribeConfigurationRecordersXAmzTargetEnum = "StarlingDoveService.DescribeConfigurationRecorders"
)

type DescribeConfigurationRecordersHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConfigurationRecordersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConfigurationRecordersRequest struct {
	Headers DescribeConfigurationRecordersHeaders
	Request shared.DescribeConfigurationRecordersRequest `request:"mediaType=application/json"`
}

type DescribeConfigurationRecordersResponse struct {
	ContentType                            string
	DescribeConfigurationRecordersResponse *shared.DescribeConfigurationRecordersResponse
	NoSuchConfigurationRecorderException   *interface{}
	StatusCode                             int64
}
