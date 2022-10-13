package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTopicsDetectionJobXAmzTargetEnum string

const (
	DescribeTopicsDetectionJobXAmzTargetEnumComprehend20171127DescribeTopicsDetectionJob DescribeTopicsDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeTopicsDetectionJob"
)

type DescribeTopicsDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTopicsDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTopicsDetectionJobRequest struct {
	Headers DescribeTopicsDetectionJobHeaders
	Request shared.DescribeTopicsDetectionJobRequest `request:"mediaType=application/json"`
}

type DescribeTopicsDetectionJobResponse struct {
	ContentType                        string
	DescribeTopicsDetectionJobResponse *shared.DescribeTopicsDetectionJobResponse
	InternalServerException            *interface{}
	InvalidRequestException            *interface{}
	JobNotFoundException               *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
