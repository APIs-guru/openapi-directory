package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoryXAmzTargetEnum string

const (
	DeleteRepositoryXAmzTargetEnumCodeCommit20150413DeleteRepository DeleteRepositoryXAmzTargetEnum = "CodeCommit_20150413.DeleteRepository"
)

type DeleteRepositoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRepositoryRequest struct {
	Headers DeleteRepositoryHeaders
	Request shared.DeleteRepositoryInput `request:"mediaType=application/json"`
}

type DeleteRepositoryResponse struct {
	ContentType                              string
	DeleteRepositoryOutput                   *shared.DeleteRepositoryOutput
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidRepositoryNameException           *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
