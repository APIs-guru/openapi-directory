package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePullRequestTitleXAmzTargetEnum string

const (
	UpdatePullRequestTitleXAmzTargetEnumCodeCommit20150413UpdatePullRequestTitle UpdatePullRequestTitleXAmzTargetEnum = "CodeCommit_20150413.UpdatePullRequestTitle"
)

type UpdatePullRequestTitleHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePullRequestTitleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePullRequestTitleRequest struct {
	Headers UpdatePullRequestTitleHeaders
	Request shared.UpdatePullRequestTitleInput `request:"mediaType=application/json"`
}

type UpdatePullRequestTitleResponse struct {
	ContentType                       string
	InvalidPullRequestIDException     *interface{}
	InvalidTitleException             *interface{}
	PullRequestAlreadyClosedException *interface{}
	PullRequestDoesNotExistException  *interface{}
	PullRequestIDRequiredException    *interface{}
	StatusCode                        int64
	TitleRequiredException            *interface{}
	UpdatePullRequestTitleOutput      *shared.UpdatePullRequestTitleOutput
}
