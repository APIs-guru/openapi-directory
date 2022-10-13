package operations

import (
	"openapi/pkg/models/shared"
)

type GetPullRequestApprovalStatesXAmzTargetEnum string

const (
	GetPullRequestApprovalStatesXAmzTargetEnumCodeCommit20150413GetPullRequestApprovalStates GetPullRequestApprovalStatesXAmzTargetEnum = "CodeCommit_20150413.GetPullRequestApprovalStates"
)

type GetPullRequestApprovalStatesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPullRequestApprovalStatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPullRequestApprovalStatesRequest struct {
	Headers GetPullRequestApprovalStatesHeaders
	Request shared.GetPullRequestApprovalStatesInput `request:"mediaType=application/json"`
}

type GetPullRequestApprovalStatesResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetPullRequestApprovalStatesOutput       *shared.GetPullRequestApprovalStatesOutput
	InvalidPullRequestIDException            *interface{}
	InvalidRevisionIDException               *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	RevisionIDRequiredException              *interface{}
	StatusCode                               int64
}
