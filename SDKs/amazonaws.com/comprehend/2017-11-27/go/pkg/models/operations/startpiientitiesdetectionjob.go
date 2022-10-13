package operations

import (
	"openapi/pkg/models/shared"
)

type StartPiiEntitiesDetectionJobXAmzTargetEnum string

const (
	StartPiiEntitiesDetectionJobXAmzTargetEnumComprehend20171127StartPiiEntitiesDetectionJob StartPiiEntitiesDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartPiiEntitiesDetectionJob"
)

type StartPiiEntitiesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartPiiEntitiesDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartPiiEntitiesDetectionJobRequest struct {
	Headers StartPiiEntitiesDetectionJobHeaders
	Request shared.StartPiiEntitiesDetectionJobRequest `request:"mediaType=application/json"`
}

type StartPiiEntitiesDetectionJobResponse struct {
	ContentType                          string
	InternalServerException              *interface{}
	InvalidRequestException              *interface{}
	KmsKeyValidationException            *interface{}
	StartPiiEntitiesDetectionJobResponse *shared.StartPiiEntitiesDetectionJobResponse
	StatusCode                           int64
	TooManyRequestsException             *interface{}
	TooManyTagsException                 *interface{}
}
