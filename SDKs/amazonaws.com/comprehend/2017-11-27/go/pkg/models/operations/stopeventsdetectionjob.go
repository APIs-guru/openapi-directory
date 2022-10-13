package operations

import (
	"openapi/pkg/models/shared"
)

type StopEventsDetectionJobXAmzTargetEnum string

const (
	StopEventsDetectionJobXAmzTargetEnumComprehend20171127StopEventsDetectionJob StopEventsDetectionJobXAmzTargetEnum = "Comprehend_20171127.StopEventsDetectionJob"
)

type StopEventsDetectionJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopEventsDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopEventsDetectionJobRequest struct {
	Headers StopEventsDetectionJobHeaders
	Request shared.StopEventsDetectionJobRequest `request:"mediaType=application/json"`
}

type StopEventsDetectionJobResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	JobNotFoundException           *interface{}
	StatusCode                     int64
	StopEventsDetectionJobResponse *shared.StopEventsDetectionJobResponse
}
