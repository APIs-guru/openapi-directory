package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartJobPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
}

type StartJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartJobRequestBodyJobTypeEnum string

const (
	StartJobRequestBodyJobTypeEnumRelease StartJobRequestBodyJobTypeEnum = "RELEASE"
	StartJobRequestBodyJobTypeEnumRetry   StartJobRequestBodyJobTypeEnum = "RETRY"
	StartJobRequestBodyJobTypeEnumManual  StartJobRequestBodyJobTypeEnum = "MANUAL"
	StartJobRequestBodyJobTypeEnumWebHook StartJobRequestBodyJobTypeEnum = "WEB_HOOK"
)

type StartJobRequestBody struct {
	CommitID      *string                        `json:"commitId,omitempty"`
	CommitMessage *string                        `json:"commitMessage,omitempty"`
	CommitTime    *time.Time                     `json:"commitTime,omitempty"`
	JobID         *string                        `json:"jobId,omitempty"`
	JobReason     *string                        `json:"jobReason,omitempty"`
	JobType       StartJobRequestBodyJobTypeEnum `json:"jobType"`
}

type StartJobRequest struct {
	PathParams StartJobPathParams
	Headers    StartJobHeaders
	Request    StartJobRequestBody `request:"mediaType=application/json"`
}

type StartJobResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StartJobResult           *shared.StartJobResult
	StatusCode               int64
	UnauthorizedException    *interface{}
}
