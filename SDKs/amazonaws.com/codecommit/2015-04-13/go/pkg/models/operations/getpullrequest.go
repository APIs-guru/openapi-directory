package operations

import (
	"openapi/pkg/models/shared"
)

type GetPullRequestXAmzTargetEnum string

const (
	GetPullRequestXAmzTargetEnumCodeCommit20150413GetPullRequest GetPullRequestXAmzTargetEnum = "CodeCommit_20150413.GetPullRequest"
)

type GetPullRequestHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPullRequestXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPullRequestRequest struct {
	Headers GetPullRequestHeaders
	Request shared.GetPullRequestInput `request:"mediaType=application/json"`
}

type GetPullRequestResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetPullRequestOutput                     *shared.GetPullRequestOutput
	InvalidPullRequestIDException            *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	StatusCode                               int64
}
