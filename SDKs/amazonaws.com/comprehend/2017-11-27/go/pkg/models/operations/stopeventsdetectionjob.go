package operations

import (
	"openapi/pkg/models/shared"
)

type StopEventsDetectionJobXAmzTargetEnum string

const (
	StopEventsDetectionJobXAmzTargetEnumComprehend20171127StopEventsDetectionJob StopEventsDetectionJobXAmzTargetEnum = "Comprehend_20171127.StopEventsDetectionJob"
)

type StopEventsDetectionJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopEventsDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
