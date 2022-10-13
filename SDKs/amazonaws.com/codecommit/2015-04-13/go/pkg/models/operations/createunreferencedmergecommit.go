package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUnreferencedMergeCommitXAmzTargetEnum string

const (
	CreateUnreferencedMergeCommitXAmzTargetEnumCodeCommit20150413CreateUnreferencedMergeCommit CreateUnreferencedMergeCommitXAmzTargetEnum = "CodeCommit_20150413.CreateUnreferencedMergeCommit"
)

type CreateUnreferencedMergeCommitHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUnreferencedMergeCommitXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUnreferencedMergeCommitRequest struct {
	Headers CreateUnreferencedMergeCommitHeaders
	Request shared.CreateUnreferencedMergeCommitInput `request:"mediaType=application/json"`
}

type CreateUnreferencedMergeCommitResponse struct {
	CommitDoesNotExistException                       *interface{}
	CommitMessageLengthExceededException              *interface{}
	CommitRequiredException                           *interface{}
	ConcurrentReferenceUpdateException                *interface{}
	ContentType                                       string
	CreateUnreferencedMergeCommitOutput               *shared.CreateUnreferencedMergeCommitOutput
	EncryptionIntegrityChecksFailedException          *interface{}
	EncryptionKeyAccessDeniedException                *interface{}
	EncryptionKeyDisabledException                    *interface{}
	EncryptionKeyNotFoundException                    *interface{}
	EncryptionKeyUnavailableException                 *interface{}
	FileContentSizeLimitExceededException             *interface{}
	FileModeRequiredException                         *interface{}
	FolderContentSizeLimitExceededException           *interface{}
	InvalidCommitException                            *interface{}
	InvalidConflictDetailLevelException               *interface{}
	InvalidConflictResolutionException                *interface{}
	InvalidConflictResolutionStrategyException        *interface{}
	InvalidEmailException                             *interface{}
	InvalidFileModeException                          *interface{}
	InvalidMergeOptionException                       *interface{}
	InvalidPathException                              *interface{}
	InvalidReplacementContentException                *interface{}
	InvalidReplacementTypeException                   *interface{}
	InvalidRepositoryNameException                    *interface{}
	ManualMergeRequiredException                      *interface{}
	MaximumConflictResolutionEntriesExceededException *interface{}
	MaximumFileContentToLoadExceededException         *interface{}
	MaximumItemsToCompareExceededException            *interface{}
	MergeOptionRequiredException                      *interface{}
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
