package operations

import (
	"openapi/pkg/models/shared"
)

type StopDominantLanguageDetectionJobXAmzTargetEnum string

const (
	StopDominantLanguageDetectionJobXAmzTargetEnumComprehend20171127StopDominantLanguageDetectionJob StopDominantLanguageDetectionJobXAmzTargetEnum = "Comprehend_20171127.StopDominantLanguageDetectionJob"
)

type StopDominantLanguageDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopDominantLanguageDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopDominantLanguageDetectionJobRequest struct {
	Headers StopDominantLanguageDetectionJobHeaders
	Request shared.StopDominantLanguageDetectionJobRequest `request:"mediaType=application/json"`
}

type StopDominantLanguageDetectionJobResponse struct {
	ContentType                              string
	InternalServerException                  *interface{}
	InvalidRequestException                  *interface{}
	JobNotFoundException                     *interface{}
	StatusCode                               int64
	StopDominantLanguageDetectionJobResponse *shared.StopDominantLanguageDetectionJobResponse
}
