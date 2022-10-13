package operations

import (
	"openapi/pkg/models/shared"
)

type StartEntitiesDetectionV2JobXAmzTargetEnum string

const (
	StartEntitiesDetectionV2JobXAmzTargetEnumComprehendMedical20181030StartEntitiesDetectionV2Job StartEntitiesDetectionV2JobXAmzTargetEnum = "ComprehendMedical_20181030.StartEntitiesDetectionV2Job"
)

type StartEntitiesDetectionV2JobHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartEntitiesDetectionV2JobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartEntitiesDetectionV2JobRequest struct {
	Headers StartEntitiesDetectionV2JobHeaders
	Request shared.StartEntitiesDetectionV2JobRequest `request:"mediaType=application/json"`
}

type StartEntitiesDetectionV2JobResponse struct {
	ContentType                         string
	InternalServerException             *interface{}
	InvalidRequestException             *interface{}
	ResourceNotFoundException           *interface{}
	StartEntitiesDetectionV2JobResponse *shared.StartEntitiesDetectionV2JobResponse
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
