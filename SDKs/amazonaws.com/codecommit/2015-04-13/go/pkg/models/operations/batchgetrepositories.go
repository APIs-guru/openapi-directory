package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetRepositoriesXAmzTargetEnum string

const (
	BatchGetRepositoriesXAmzTargetEnumCodeCommit20150413BatchGetRepositories BatchGetRepositoriesXAmzTargetEnum = "CodeCommit_20150413.BatchGetRepositories"
)

type BatchGetRepositoriesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetRepositoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetRepositoriesRequest struct {
	Headers BatchGetRepositoriesHeaders
	Request shared.BatchGetRepositoriesInput `request:"mediaType=application/json"`
}

type BatchGetRepositoriesResponse struct {
	BatchGetRepositoriesOutput               *shared.BatchGetRepositoriesOutput
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidRepositoryNameException           *interface{}
	MaximumRepositoryNamesExceededException  *interface{}
	RepositoryNamesRequiredException         *interface{}
	StatusCode                               int64
}
