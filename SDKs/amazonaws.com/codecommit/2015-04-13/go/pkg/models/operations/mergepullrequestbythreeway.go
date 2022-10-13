package operations

import (
	"openapi/pkg/models/shared"
)

type MergePullRequestByThreeWayXAmzTargetEnum string

const (
	MergePullRequestByThreeWayXAmzTargetEnumCodeCommit20150413MergePullRequestByThreeWay MergePullRequestByThreeWayXAmzTargetEnum = "CodeCommit_20150413.MergePullRequestByThreeWay"
)

type MergePullRequestByThreeWayHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MergePullRequestByThreeWayXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MergePullRequestByThreeWayRequest struct {
	Headers MergePullRequestByThreeWayHeaders
	Request shared.MergePullRequestByThreeWayInput `request:"mediaType=application/json"`
}

type MergePullRequestByThreeWayResponse struct {
	CommitMessageLengthExceededException              *interface{}
	ConcurrentReferenceUpdateException                *interface{}
	ContentType                                       string
	EncryptionIntegrityChecksFailedException          *interface{}
	EncryptionKeyAccessDeniedException                *interface{}
	EncryptionKeyDisabledException                    *interface{}
	EncryptionKeyNotFoundException                    *interface{}
	EncryptionKeyUnavailableException                 *interface{}
	FileContentSizeLimitExceededException             *interface{}
	FolderContentSizeLimitExceededException           *interface{}
	InvalidCommitIDException                          *interface{}
	InvalidConflictDetailLevelException               *interface{}
	InvalidConflictResolutionException                *interface{}
	InvalidConflictResolutionStrategyException        *interface{}
	InvalidEmailException                             *interface{}
	InvalidFileModeException                          *interface{}
	InvalidPathException                              *interface{}
	InvalidPullRequestIDException                     *interface{}
	InvalidReplacementContentException                *interface{}
	InvalidReplacementTypeException                   *interface{}
	InvalidRepositoryNameException                    *interface{}
	ManualMergeRequiredException                      *interface{}
	MaximumConflictResolutionEntriesExceededException *interface{}
	MaximumFileContentToLoadExceededException         *interface{}
	MaximumItemsToCompareExceededException            *interface{}
	MergePullRequestByThreeWayOutput                  *shared.MergePullRequestByThreeWayOutput
	MultipleConflictResolutionEntriesException        *interface{}
	NameLengthExceededException                       *interface{}
	PathRequiredException                             *interface{}
	PullRequestAlreadyClosedException                 *interface{}
	PullRequestApprovalRulesNotSatisfiedException     *interface{}
	PullRequestDoesNotExistException                  *interface{}
	PullRequestIDRequiredException                    *interface{}
	ReplacementContentRequiredException               *interface{}
	ReplacementTypeRequiredException                  *interface{}
	RepositoryDoesNotExistException                   *interface{}
	RepositoryNameRequiredException                   *interface{}
	RepositoryNotAssociatedWithPullRequestException   *interface{}
	StatusCode                                        int64
	TipOfSourceReferenceIsDifferentException          *interface{}
	TipsDivergenceExceededException                   *interface{}
}
