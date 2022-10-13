package operations

import (
	"openapi/pkg/models/shared"
)

type StopSentimentDetectionJobXAmzTargetEnum string

const (
	StopSentimentDetectionJobXAmzTargetEnumComprehend20171127StopSentimentDetectionJob StopSentimentDetectionJobXAmzTargetEnum = "Comprehend_20171127.StopSentimentDetectionJob"
)

type StopSentimentDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopSentimentDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopSentimentDetectionJobRequest struct {
	Headers StopSentimentDetectionJobHeaders
	Request shared.StopSentimentDetectionJobRequest `request:"mediaType=application/json"`
}

type StopSentimentDetectionJobResponse struct {
	ContentType                       string
	InternalServerException           *interface{}
	InvalidRequestException           *interface{}
	JobNotFoundException              *interface{}
	StatusCode                        int64
	StopSentimentDetectionJobResponse *shared.StopSentimentDetectionJobResponse
}
