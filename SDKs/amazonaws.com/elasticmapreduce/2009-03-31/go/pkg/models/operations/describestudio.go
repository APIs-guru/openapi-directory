package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStudioXAmzTargetEnum string

const (
	DescribeStudioXAmzTargetEnumElasticMapReduceDescribeStudio DescribeStudioXAmzTargetEnum = "ElasticMapReduce.DescribeStudio"
)

type DescribeStudioHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStudioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStudioRequest struct {
	Headers DescribeStudioHeaders
	Request shared.DescribeStudioInput `request:"mediaType=application/json"`
}

type DescribeStudioResponse struct {
	ContentType             string
	DescribeStudioOutput    *shared.DescribeStudioOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
