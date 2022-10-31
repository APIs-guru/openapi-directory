package operations

import (
	"openapi/pkg/models/shared"
)

type GetFileXAmzTargetEnum string

const (
	GetFileXAmzTargetEnumCodeCommit20150413GetFile GetFileXAmzTargetEnum = "CodeCommit_20150413.GetFile"
)

type GetFileHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetFileRequest struct {
	Headers GetFileHeaders
	Request shared.GetFileInput `request:"mediaType=application/json"`
}

type GetFileResponse struct {
	CommitDoesNotExistException              *interface{}
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	FileDoesNotExistException                *interface{}
	FileTooLargeException                    *interface{}
	GetFileOutput                            *shared.GetFileOutput
	InvalidCommitException                   *interface{}
	InvalidPathException                     *interface{}
	InvalidRepositoryNameException           *interface{}
	PathRequiredException                    *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
