package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePullRequestDescriptionXAmzTargetEnum string

const (
	UpdatePullRequestDescriptionXAmzTargetEnumCodeCommit20150413UpdatePullRequestDescription UpdatePullRequestDescriptionXAmzTargetEnum = "CodeCommit_20150413.UpdatePullRequestDescription"
)

type UpdatePullRequestDescriptionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePullRequestDescriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePullRequestDescriptionRequest struct {
	Headers UpdatePullRequestDescriptionHeaders
	Request shared.UpdatePullRequestDescriptionInput `request:"mediaType=application/json"`
}

type UpdatePullRequestDescriptionResponse struct {
	ContentType                        string
	InvalidDescriptionException        *interface{}
	InvalidPullRequestIDException      *interface{}
	PullRequestAlreadyClosedException  *interface{}
	PullRequestDoesNotExistException   *interface{}
	PullRequestIDRequiredException     *interface{}
	StatusCode                         int64
	UpdatePullRequestDescriptionOutput *shared.UpdatePullRequestDescriptionOutput
}
