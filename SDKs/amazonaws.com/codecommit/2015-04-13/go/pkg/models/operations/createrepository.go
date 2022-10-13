package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRepositoryXAmzTargetEnum string

const (
	CreateRepositoryXAmzTargetEnumCodeCommit20150413CreateRepository CreateRepositoryXAmzTargetEnum = "CodeCommit_20150413.CreateRepository"
)

type CreateRepositoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateRepositoryRequest struct {
	Headers CreateRepositoryHeaders
	Request shared.CreateRepositoryInput `request:"mediaType=application/json"`
}

type CreateRepositoryResponse struct {
	ContentType                              string
	CreateRepositoryOutput                   *shared.CreateRepositoryOutput
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidRepositoryDescriptionException    *interface{}
	InvalidRepositoryNameException           *interface{}
	InvalidSystemTagUsageException           *interface{}
	InvalidTagsMapException                  *interface{}
	RepositoryLimitExceededException         *interface{}
	RepositoryNameExistsException            *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
	TagPolicyException                       *interface{}
	TooManyTagsException                     *interface{}
}
