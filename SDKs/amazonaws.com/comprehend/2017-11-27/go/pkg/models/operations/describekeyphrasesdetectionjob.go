package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeKeyPhrasesDetectionJobXAmzTargetEnum string

const (
	DescribeKeyPhrasesDetectionJobXAmzTargetEnumComprehend20171127DescribeKeyPhrasesDetectionJob DescribeKeyPhrasesDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"
)

type DescribeKeyPhrasesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeKeyPhrasesDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeKeyPhrasesDetectionJobRequest struct {
	Headers DescribeKeyPhrasesDetectionJobHeaders
	Request shared.DescribeKeyPhrasesDetectionJobRequest `request:"mediaType=application/json"`
}

type DescribeKeyPhrasesDetectionJobResponse struct {
	ContentType                            string
	DescribeKeyPhrasesDetectionJobResponse *shared.DescribeKeyPhrasesDetectionJobResponse
	InternalServerException                *interface{}
	InvalidRequestException                *interface{}
	JobNotFoundException                   *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
