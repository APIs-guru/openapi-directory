package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryTriggersXAmzTargetEnum string

const (
	GetRepositoryTriggersXAmzTargetEnumCodeCommit20150413GetRepositoryTriggers GetRepositoryTriggersXAmzTargetEnum = "CodeCommit_20150413.GetRepositoryTriggers"
)

type GetRepositoryTriggersHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRepositoryTriggersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRepositoryTriggersRequest struct {
	Headers GetRepositoryTriggersHeaders
	Request shared.GetRepositoryTriggersInput `request:"mediaType=application/json"`
}

type GetRepositoryTriggersResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetRepositoryTriggersOutput              *shared.GetRepositoryTriggersOutput
	InvalidRepositoryNameException           *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
