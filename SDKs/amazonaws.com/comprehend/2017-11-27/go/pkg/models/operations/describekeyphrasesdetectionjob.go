package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeKeyPhrasesDetectionJobXAmzTargetEnum string

const (
	DescribeKeyPhrasesDetectionJobXAmzTargetEnumComprehend20171127DescribeKeyPhrasesDetectionJob DescribeKeyPhrasesDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"
)

type DescribeKeyPhrasesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeKeyPhrasesDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
