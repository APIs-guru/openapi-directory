package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCommitXAmzTargetEnum string

const (
	CreateCommitXAmzTargetEnumCodeCommit20150413CreateCommit CreateCommitXAmzTargetEnum = "CodeCommit_20150413.CreateCommit"
)

type CreateCommitHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCommitXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
