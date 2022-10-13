package operations

import (
	"openapi/pkg/models/shared"
)

type StartKeyPhrasesDetectionJobXAmzTargetEnum string

const (
	StartKeyPhrasesDetectionJobXAmzTargetEnumComprehend20171127StartKeyPhrasesDetectionJob StartKeyPhrasesDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartKeyPhrasesDetectionJob"
)

type StartKeyPhrasesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartKeyPhrasesDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartKeyPhrasesDetectionJobRequest struct {
	Headers StartKeyPhrasesDetectionJobHeaders
	Request shared.StartKeyPhrasesDetectionJobRequest `request:"mediaType=application/json"`
}

type StartKeyPhrasesDetectionJobResponse struct {
	ContentType                         string
	InternalServerException             *interface{}
	InvalidRequestException             *interface{}
	KmsKeyValidationException           *interface{}
	StartKeyPhrasesDetectionJobResponse *shared.StartKeyPhrasesDetectionJobResponse
	StatusCode                          int64
	TooManyRequestsException            *interface{}
	TooManyTagsException                *interface{}
}
