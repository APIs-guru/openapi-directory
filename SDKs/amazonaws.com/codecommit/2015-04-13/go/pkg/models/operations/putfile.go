package operations

import (
	"openapi/pkg/models/shared"
)

type PutFileXAmzTargetEnum string

const (
	PutFileXAmzTargetEnumCodeCommit20150413PutFile PutFileXAmzTargetEnum = "CodeCommit_20150413.PutFile"
)

type PutFileHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutFileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutFileRequest struct {
	Headers PutFileHeaders
	Request shared.PutFileInput `request:"mediaType=application/json"`
}

type PutFileResponse struct {
	BranchDoesNotExistException                 *interface{}
	BranchNameIsTagNameException                *interface{}
	BranchNameRequiredException                 *interface{}
	CommitMessageLengthExceededException        *interface{}
	ContentType                                 string
	DirectoryNameConflictsWithFileNameException *interface{}
	EncryptionIntegrityChecksFailedException    *interface{}
	EncryptionKeyAccessDeniedException          *interface{}
	EncryptionKeyDisabledException              *interface{}
	EncryptionKeyNotFoundException              *interface{}
	EncryptionKeyUnavailableException           *interface{}
	FileContentRequiredException                *interface{}
	FileContentSizeLimitExceededException       *interface{}
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
	NameLengthExceededException                 *interface{}
	ParentCommitDoesNotExistException           *interface{}
	ParentCommitIDOutdatedException             *interface{}
	ParentCommitIDRequiredException             *interface{}
	PathRequiredException                       *interface{}
	PutFileOutput                               *shared.PutFileOutput
	RepositoryDoesNotExistException             *interface{}
	RepositoryNameRequiredException             *interface{}
	SameFileContentException                    *interface{}
	StatusCode                                  int64
}
