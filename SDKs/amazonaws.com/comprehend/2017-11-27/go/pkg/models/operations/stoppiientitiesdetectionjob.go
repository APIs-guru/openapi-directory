package operations

import (
	"openapi/pkg/models/shared"
)

type StopPiiEntitiesDetectionJobXAmzTargetEnum string

const (
	StopPiiEntitiesDetectionJobXAmzTargetEnumComprehend20171127StopPiiEntitiesDetectionJob StopPiiEntitiesDetectionJobXAmzTargetEnum = "Comprehend_20171127.StopPiiEntitiesDetectionJob"
)

type StopPiiEntitiesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopPiiEntitiesDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopPiiEntitiesDetectionJobRequest struct {
	Headers StopPiiEntitiesDetectionJobHeaders
	Request shared.StopPiiEntitiesDetectionJobRequest `request:"mediaType=application/json"`
}

type StopPiiEntitiesDetectionJobResponse struct {
	ContentType                         string
	InternalServerException             *interface{}
	InvalidRequestException             *interface{}
	JobNotFoundException                *interface{}
	StatusCode                          int64
	StopPiiEntitiesDetectionJobResponse *shared.StopPiiEntitiesDetectionJobResponse
}
