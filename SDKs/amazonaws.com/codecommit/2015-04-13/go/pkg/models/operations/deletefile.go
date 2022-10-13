package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFileXAmzTargetEnum string

const (
	DeleteFileXAmzTargetEnumCodeCommit20150413DeleteFile DeleteFileXAmzTargetEnum = "CodeCommit_20150413.DeleteFile"
)

type DeleteFileHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFileRequest struct {
	Headers DeleteFileHeaders
	Request shared.DeleteFileInput `request:"mediaType=application/json"`
}

type DeleteFileResponse struct {
	BranchDoesNotExistException              *interface{}
	BranchNameIsTagNameException             *interface{}
	BranchNameRequiredException              *interface{}
	CommitMessageLengthExceededException     *interface{}
	ContentType                              string
	DeleteFileOutput                         *shared.DeleteFileOutput
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	FileDoesNotExistException                *interface{}
	InvalidBranchNameException               *interface{}
	InvalidEmailException                    *interface{}
	InvalidParentCommitIDException           *interface{}
	InvalidPathException                     *interface{}
	InvalidRepositoryNameException           *interface{}
	NameLengthExceededException              *interface{}
	ParentCommitDoesNotExistException        *interface{}
	ParentCommitIDOutdatedException          *interface{}
	ParentCommitIDRequiredException          *interface{}
	PathRequiredException                    *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
