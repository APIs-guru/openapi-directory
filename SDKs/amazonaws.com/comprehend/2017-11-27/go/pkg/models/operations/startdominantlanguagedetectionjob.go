package operations

import (
	"openapi/pkg/models/shared"
)

type StartDominantLanguageDetectionJobXAmzTargetEnum string

const (
	StartDominantLanguageDetectionJobXAmzTargetEnumComprehend20171127StartDominantLanguageDetectionJob StartDominantLanguageDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartDominantLanguageDetectionJob"
)

type StartDominantLanguageDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartDominantLanguageDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartDominantLanguageDetectionJobRequest struct {
	Headers StartDominantLanguageDetectionJobHeaders
	Request shared.StartDominantLanguageDetectionJobRequest `request:"mediaType=application/json"`
}

type StartDominantLanguageDetectionJobResponse struct {
	ContentType                               string
	InternalServerException                   *interface{}
	InvalidRequestException                   *interface{}
	KmsKeyValidationException                 *interface{}
	StartDominantLanguageDetectionJobResponse *shared.StartDominantLanguageDetectionJobResponse
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
	TooManyTagsException                      *interface{}
}
