package operations

import (
	"openapi/pkg/models/shared"
)

type MergePullRequestByFastForwardXAmzTargetEnum string

const (
	MergePullRequestByFastForwardXAmzTargetEnumCodeCommit20150413MergePullRequestByFastForward MergePullRequestByFastForwardXAmzTargetEnum = "CodeCommit_20150413.MergePullRequestByFastForward"
)

type MergePullRequestByFastForwardHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MergePullRequestByFastForwardXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MergePullRequestByFastForwardRequest struct {
	Headers MergePullRequestByFastForwardHeaders
	Request shared.MergePullRequestByFastForwardInput `request:"mediaType=application/json"`
}

type MergePullRequestByFastForwardResponse struct {
	ConcurrentReferenceUpdateException              *interface{}
	ContentType                                     string
	EncryptionIntegrityChecksFailedException        *interface{}
	EncryptionKeyAccessDeniedException              *interface{}
	EncryptionKeyDisabledException                  *interface{}
	EncryptionKeyNotFoundException                  *interface{}
	EncryptionKeyUnavailableException               *interface{}
	InvalidCommitIDException                        *interface{}
	InvalidPullRequestIDException                   *interface{}
	InvalidRepositoryNameException                  *interface{}
	ManualMergeRequiredException                    *interface{}
	MergePullRequestByFastForwardOutput             *shared.MergePullRequestByFastForwardOutput
	PullRequestAlreadyClosedException               *interface{}
	PullRequestApprovalRulesNotSatisfiedException   *interface{}
	PullRequestDoesNotExistException                *interface{}
	PullRequestIDRequiredException                  *interface{}
	ReferenceDoesNotExistException                  *interface{}
	RepositoryDoesNotExistException                 *interface{}
	RepositoryNameRequiredException                 *interface{}
	RepositoryNotAssociatedWithPullRequestException *interface{}
	StatusCode                                      int64
	TipOfSourceReferenceIsDifferentException        *interface{}
}
