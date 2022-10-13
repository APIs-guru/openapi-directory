package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoryTriggersXAmzTargetEnum string

const (
	PutRepositoryTriggersXAmzTargetEnumCodeCommit20150413PutRepositoryTriggers PutRepositoryTriggersXAmzTargetEnum = "CodeCommit_20150413.PutRepositoryTriggers"
)

type PutRepositoryTriggersHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRepositoryTriggersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutRepositoryTriggersRequest struct {
	Headers PutRepositoryTriggersHeaders
	Request shared.PutRepositoryTriggersInput `request:"mediaType=application/json"`
}

type PutRepositoryTriggersResponse struct {
	ContentType                                      string
	EncryptionIntegrityChecksFailedException         *interface{}
	EncryptionKeyAccessDeniedException               *interface{}
	EncryptionKeyDisabledException                   *interface{}
	EncryptionKeyNotFoundException                   *interface{}
	EncryptionKeyUnavailableException                *interface{}
	InvalidRepositoryNameException                   *interface{}
	InvalidRepositoryTriggerBranchNameException      *interface{}
	InvalidRepositoryTriggerCustomDataException      *interface{}
	InvalidRepositoryTriggerDestinationArnException  *interface{}
	InvalidRepositoryTriggerEventsException          *interface{}
	InvalidRepositoryTriggerNameException            *interface{}
	InvalidRepositoryTriggerRegionException          *interface{}
	MaximumBranchesExceededException                 *interface{}
	MaximumRepositoryTriggersExceededException       *interface{}
	PutRepositoryTriggersOutput                      *shared.PutRepositoryTriggersOutput
	RepositoryDoesNotExistException                  *interface{}
	RepositoryNameRequiredException                  *interface{}
	RepositoryTriggerBranchNameListRequiredException *interface{}
	RepositoryTriggerDestinationArnRequiredException *interface{}
	RepositoryTriggerEventsListRequiredException     *interface{}
	RepositoryTriggerNameRequiredException           *interface{}
	RepositoryTriggersListRequiredException          *interface{}
	StatusCode                                       int64
}
