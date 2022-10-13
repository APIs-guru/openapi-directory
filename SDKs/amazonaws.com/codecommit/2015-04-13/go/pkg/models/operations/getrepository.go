package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryXAmzTargetEnum string

const (
	GetRepositoryXAmzTargetEnumCodeCommit20150413GetRepository GetRepositoryXAmzTargetEnum = "CodeCommit_20150413.GetRepository"
)

type GetRepositoryHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRepositoryRequest struct {
	Headers GetRepositoryHeaders
	Request shared.GetRepositoryInput `request:"mediaType=application/json"`
}

type GetRepositoryResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetRepositoryOutput                      *shared.GetRepositoryOutput
	InvalidRepositoryNameException           *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
