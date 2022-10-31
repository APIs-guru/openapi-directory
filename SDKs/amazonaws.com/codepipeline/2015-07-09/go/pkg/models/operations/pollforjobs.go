package operations

import (
	"openapi/pkg/models/shared"
)

type PollForJobsXAmzTargetEnum string

const (
	PollForJobsXAmzTargetEnumCodePipeline20150709PollForJobs PollForJobsXAmzTargetEnum = "CodePipeline_20150709.PollForJobs"
)

type PollForJobsHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PollForJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
