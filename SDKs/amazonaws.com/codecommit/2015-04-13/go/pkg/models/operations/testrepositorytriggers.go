package operations

import (
	"openapi/pkg/models/shared"
)

type TestRepositoryTriggersXAmzTargetEnum string

const (
	TestRepositoryTriggersXAmzTargetEnumCodeCommit20150413TestRepositoryTriggers TestRepositoryTriggersXAmzTargetEnum = "CodeCommit_20150413.TestRepositoryTriggers"
)

type TestRepositoryTriggersHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TestRepositoryTriggersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TestRepositoryTriggersRequest struct {
	Headers TestRepositoryTriggersHeaders
	Request shared.TestRepositoryTriggersInput `request:"mediaType=application/json"`
}

type TestRepositoryTriggersResponse struct {
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
	RepositoryDoesNotExistException                  *interface{}
	RepositoryNameRequiredException                  *interface{}
	RepositoryTriggerBranchNameListRequiredException *interface{}
	RepositoryTriggerDestinationArnRequiredException *interface{}
	RepositoryTriggerEventsListRequiredException     *interface{}
	RepositoryTriggerNameRequiredException           *interface{}
	RepositoryTriggersListRequiredException          *interface{}
	StatusCode                                       int64
	TestRepositoryTriggersOutput                     *shared.TestRepositoryTriggersOutput
}
