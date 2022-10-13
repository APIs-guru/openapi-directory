package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlobXAmzTargetEnum string

const (
	GetBlobXAmzTargetEnumCodeCommit20150413GetBlob GetBlobXAmzTargetEnum = "CodeCommit_20150413.GetBlob"
)

type GetBlobHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBlobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetBlobRequest struct {
	Headers GetBlobHeaders
	Request shared.GetBlobInput `request:"mediaType=application/json"`
}

type GetBlobResponse struct {
	BlobIDDoesNotExistException              *interface{}
	BlobIDRequiredException                  *interface{}
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	FileTooLargeException                    *interface{}
	GetBlobOutput                            *shared.GetBlobOutput
	InvalidBlobIDException                   *interface{}
	InvalidRepositoryNameException           *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
