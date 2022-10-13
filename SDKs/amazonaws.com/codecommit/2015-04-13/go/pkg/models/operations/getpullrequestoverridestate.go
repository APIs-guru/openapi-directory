package operations

import (
	"openapi/pkg/models/shared"
)

type GetPullRequestOverrideStateXAmzTargetEnum string

const (
	GetPullRequestOverrideStateXAmzTargetEnumCodeCommit20150413GetPullRequestOverrideState GetPullRequestOverrideStateXAmzTargetEnum = "CodeCommit_20150413.GetPullRequestOverrideState"
)

type GetPullRequestOverrideStateHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPullRequestOverrideStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPullRequestOverrideStateRequest struct {
	Headers GetPullRequestOverrideStateHeaders
	Request shared.GetPullRequestOverrideStateInput `request:"mediaType=application/json"`
}

type GetPullRequestOverrideStateResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetPullRequestOverrideStateOutput        *shared.GetPullRequestOverrideStateOutput
	InvalidPullRequestIDException            *interface{}
	InvalidRevisionIDException               *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	RevisionIDRequiredException              *interface{}
	StatusCode                               int64
}
