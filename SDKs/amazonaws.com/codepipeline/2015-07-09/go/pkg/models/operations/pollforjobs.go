package operations

import (
	"openapi/pkg/models/shared"
)

type PollForJobsXAmzTargetEnum string

const (
	PollForJobsXAmzTargetEnumCodePipeline20150709PollForJobs PollForJobsXAmzTargetEnum = "CodePipeline_20150709.PollForJobs"
)

type PollForJobsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PollForJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PollForJobsRequest struct {
	Headers PollForJobsHeaders
	Request shared.PollForJobsInput `request:"mediaType=application/json"`
}

type PollForJobsResponse struct {
	ActionTypeNotFoundException *interface{}
	ContentType                 string
	PollForJobsOutput           *shared.PollForJobsOutput
	StatusCode                  int64
	ValidationException         *interface{}
}
