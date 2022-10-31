package operations

import (
	"openapi/pkg/models/shared"
)

type StartEntitiesDetectionJobXAmzTargetEnum string

const (
	StartEntitiesDetectionJobXAmzTargetEnumComprehend20171127StartEntitiesDetectionJob StartEntitiesDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartEntitiesDetectionJob"
)

type StartEntitiesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartEntitiesDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
