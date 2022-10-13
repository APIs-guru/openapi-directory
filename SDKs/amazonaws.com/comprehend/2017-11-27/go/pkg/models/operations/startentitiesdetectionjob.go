package operations

import (
	"openapi/pkg/models/shared"
)

type StartEntitiesDetectionJobXAmzTargetEnum string

const (
	StartEntitiesDetectionJobXAmzTargetEnumComprehend20171127StartEntitiesDetectionJob StartEntitiesDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartEntitiesDetectionJob"
)

type StartEntitiesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartEntitiesDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartEntitiesDetectionJobRequest struct {
	Headers StartEntitiesDetectionJobHeaders
	Request shared.StartEntitiesDetectionJobRequest `request:"mediaType=application/json"`
}

type StartEntitiesDetectionJobResponse struct {
	ContentType                       string
	InternalServerException           *interface{}
	InvalidRequestException           *interface{}
	KmsKeyValidationException         *interface{}
	ResourceNotFoundException         *interface{}
	ResourceUnavailableException      *interface{}
	StartEntitiesDetectionJobResponse *shared.StartEntitiesDetectionJobResponse
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	TooManyTagsException              *interface{}
}
