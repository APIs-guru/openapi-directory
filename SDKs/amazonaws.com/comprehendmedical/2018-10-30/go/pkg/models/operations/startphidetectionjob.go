package operations

import (
	"openapi/pkg/models/shared"
)

type StartPhiDetectionJobXAmzTargetEnum string

const (
	StartPhiDetectionJobXAmzTargetEnumComprehendMedical20181030StartPhiDetectionJob StartPhiDetectionJobXAmzTargetEnum = "ComprehendMedical_20181030.StartPHIDetectionJob"
)

type StartPhiDetectionJobHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartPhiDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartPhiDetectionJobRequest struct {
	Headers StartPhiDetectionJobHeaders
	Request shared.StartPhiDetectionJobRequest `request:"mediaType=application/json"`
}

type StartPhiDetectionJobResponse struct {
	ContentType                  string
	InternalServerException      *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StartPhiDetectionJobResponse *shared.StartPhiDetectionJobResponse
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
