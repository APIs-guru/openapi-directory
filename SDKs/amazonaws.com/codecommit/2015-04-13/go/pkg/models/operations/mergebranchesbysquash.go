package operations

import (
	"openapi/pkg/models/shared"
)

type MergeBranchesBySquashXAmzTargetEnum string

const (
	MergeBranchesBySquashXAmzTargetEnumCodeCommit20150413MergeBranchesBySquash MergeBranchesBySquashXAmzTargetEnum = "CodeCommit_20150413.MergeBranchesBySquash"
)

type MergeBranchesBySquashHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MergeBranchesBySquashXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MergeBranchesBySquashRequest struct {
	Headers MergeBranchesBySquashHeaders
	Request shared.MergeBranchesBySquashInput `request:"mediaType=application/json"`
}

type MergeBranchesBySquashResponse struct {
	BranchDoesNotExistException                       *interface{}
	BranchNameIsTagNameException                      *interface{}
	BranchNameRequiredException                       *interface{}
	CommitDoesNotExistException                       *interface{}
	CommitMessageLengthExceededException              *interface{}
	CommitRequiredException                           *interface{}
	ConcurrentReferenceUpdateException                *interface{}
	ContentType                                       string
	EncryptionIntegrityChecksFailedException          *interface{}
	EncryptionKeyAccessDeniedException                *interface{}
	EncryptionKeyDisabledException                    *interface{}
	EncryptionKeyNotFoundException                    *interface{}
	EncryptionKeyUnavailableException                 *interface{}
	FileContentSizeLimitExceededException             *interface{}
	FileModeRequiredException                         *interface{}
	FolderContentSizeLimitExceededException           *interface{}
	InvalidBranchNameException                        *interface{}
	InvalidCommitException                            *interface{}
	InvalidConflictDetailLevelException               *interface{}
	InvalidConflictResolutionException                *interface{}
	InvalidConflictResolutionStrategyException        *interface{}
	InvalidEmailException                             *interface{}
	InvalidFileModeException                          *interface{}
	InvalidPathException                              *interface{}
	InvalidReplacementContentException                *interface{}
	InvalidReplacementTypeException                   *interface{}
	InvalidRepositoryNameException                    *interface{}
	InvalidTargetBranchException                      *interface{}
	ManualMergeRequiredException                      *interface{}
	MaximumConflictResolutionEntriesExceededException *interface{}
	MaximumFileContentToLoadExceededException         *interface{}
	MaximumItemsToCompareExceededException            *interface{}
	MergeBranchesBySquashOutput                       *shared.MergeBranchesBySquashOutput
	MultipleConflictResolutionEntriesException        *interface{}
	NameLengthExceededException                       *interface{}
	PathRequiredException                             *interface{}
	ReplacementContentRequiredException               *interface{}
	ReplacementTypeRequiredException                  *interface{}
	RepositoryDoesNotExistException                   *interface{}
	RepositoryNameRequiredException                   *interface{}
	StatusCode                                        int64
	TipsDivergenceExceededException                   *interface{}
}
