package operations

import (
	"openapi/pkg/models/shared"
)

type PollForThirdPartyJobsXAmzTargetEnum string

const (
	PollForThirdPartyJobsXAmzTargetEnumCodePipeline20150709PollForThirdPartyJobs PollForThirdPartyJobsXAmzTargetEnum = "CodePipeline_20150709.PollForThirdPartyJobs"
)

type PollForThirdPartyJobsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PollForThirdPartyJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PollForThirdPartyJobsRequest struct {
	Headers PollForThirdPartyJobsHeaders
	Request shared.PollForThirdPartyJobsInput `request:"mediaType=application/json"`
}

type PollForThirdPartyJobsResponse struct {
	ActionTypeNotFoundException *interface{}
	ContentType                 string
	PollForThirdPartyJobsOutput *shared.PollForThirdPartyJobsOutput
	StatusCode                  int64
	ValidationException         *interface{}
}
