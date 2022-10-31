package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommitXAmzTargetEnum string

const (
	GetCommitXAmzTargetEnumCodeCommit20150413GetCommit GetCommitXAmzTargetEnum = "CodeCommit_20150413.GetCommit"
)

type GetCommitHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCommitXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCommitRequest struct {
	Headers GetCommitHeaders
	Request shared.GetCommitInput `request:"mediaType=application/json"`
}

type GetCommitResponse struct {
	CommitIDDoesNotExistException            *interface{}
	CommitIDRequiredException                *interface{}
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetCommitOutput                          *shared.GetCommitOutput
	InvalidCommitIDException                 *interface{}
	InvalidRepositoryNameException           *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
