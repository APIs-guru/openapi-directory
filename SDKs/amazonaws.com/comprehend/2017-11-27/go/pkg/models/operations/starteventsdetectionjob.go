package operations

import (
	"openapi/pkg/models/shared"
)

type StartEventsDetectionJobXAmzTargetEnum string

const (
	StartEventsDetectionJobXAmzTargetEnumComprehend20171127StartEventsDetectionJob StartEventsDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartEventsDetectionJob"
)

type StartEventsDetectionJobHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartEventsDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartEventsDetectionJobRequest struct {
	Headers StartEventsDetectionJobHeaders
	Request shared.StartEventsDetectionJobRequest `request:"mediaType=application/json"`
}

type StartEventsDetectionJobResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	KmsKeyValidationException       *interface{}
	StartEventsDetectionJobResponse *shared.StartEventsDetectionJobResponse
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	TooManyTagsException            *interface{}
}
