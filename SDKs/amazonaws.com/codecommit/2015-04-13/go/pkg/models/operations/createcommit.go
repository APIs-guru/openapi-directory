package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCommitXAmzTargetEnum string

const (
	CreateCommitXAmzTargetEnumCodeCommit20150413CreateCommit CreateCommitXAmzTargetEnum = "CodeCommit_20150413.CreateCommit"
)

type CreateCommitHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCommitXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCommitRequest struct {
	Headers CreateCommitHeaders
	Request shared.CreateCommitInput `request:"mediaType=application/json"`
}

type CreateCommitResponse struct {
	BranchDoesNotExistException                 *interface{}
	BranchNameIsTagNameException                *interface{}
	BranchNameRequiredException                 *interface{}
	CommitMessageLengthExceededException        *interface{}
	ContentType                                 string
	CreateCommitOutput                          *shared.CreateCommitOutput
	DirectoryNameConflictsWithFileNameException *interface{}
	EncryptionIntegrityChecksFailedException    *interface{}
	EncryptionKeyAccessDeniedException          *interface{}
	EncryptionKeyDisabledException              *interface{}
	EncryptionKeyNotFoundException              *interface{}
	EncryptionKeyUnavailableException           *interface{}
	FileContentAndSourceFileSpecifiedException  *interface{}
	FileContentSizeLimitExceededException       *interface{}
	FileDoesNotExistException                   *interface{}
	FileEntryRequiredException                  *interface{}
	FileModeRequiredException                   *interface{}
	FileNameConflictsWithDirectoryNameException *interface{}
	FilePathConflictsWithSubmodulePathException *interface{}
	FolderContentSizeLimitExceededException     *interface{}
	InvalidBranchNameException                  *interface{}
	InvalidDeletionParameterException           *interface{}
	InvalidEmailException                       *interface{}
	InvalidFileModeException                    *interface{}
	InvalidParentCommitIDException              *interface{}
	InvalidPathException                        *interface{}
	InvalidRepositoryNameException              *interface{}
	MaximumFileEntriesExceededException         *interface{}
	NameLengthExceededException                 *interface{}
	NoChangeException                           *interface{}
	ParentCommitDoesNotExistException           *interface{}
	ParentCommitIDOutdatedException             *interface{}
	ParentCommitIDRequiredException             *interface{}
	PathRequiredException                       *interface{}
	PutFileEntryConflictException               *interface{}
	RepositoryDoesNotExistException             *interface{}
	RepositoryNameRequiredException             *interface{}
	RestrictedSourceFileException               *interface{}
	SamePathRequestException                    *interface{}
	SourceFileOrContentRequiredException        *interface{}
	StatusCode                                  int64
}
