package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePullRequestXAmzTargetEnum string

const (
	CreatePullRequestXAmzTargetEnumCodeCommit20150413CreatePullRequest CreatePullRequestXAmzTargetEnum = "CodeCommit_20150413.CreatePullRequest"
)

type CreatePullRequestHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePullRequestXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreatePullRequestRequest struct {
	Headers CreatePullRequestHeaders
	Request shared.CreatePullRequestInput `request:"mediaType=application/json"`
}

type CreatePullRequestResponse struct {
	ClientRequestTokenRequiredException        *interface{}
	ContentType                                string
	CreatePullRequestOutput                    *shared.CreatePullRequestOutput
	EncryptionIntegrityChecksFailedException   *interface{}
	EncryptionKeyAccessDeniedException         *interface{}
	EncryptionKeyDisabledException             *interface{}
	EncryptionKeyNotFoundException             *interface{}
	EncryptionKeyUnavailableException          *interface{}
	IdempotencyParameterMismatchException      *interface{}
	InvalidClientRequestTokenException         *interface{}
	InvalidDescriptionException                *interface{}
	InvalidReferenceNameException              *interface{}
	InvalidRepositoryNameException             *interface{}
	InvalidTargetException                     *interface{}
	InvalidTargetsException                    *interface{}
	InvalidTitleException                      *interface{}
	MaximumOpenPullRequestsExceededException   *interface{}
	MultipleRepositoriesInPullRequestException *interface{}
	ReferenceDoesNotExistException             *interface{}
	ReferenceNameRequiredException             *interface{}
	ReferenceTypeNotSupportedException         *interface{}
	RepositoryDoesNotExistException            *interface{}
	RepositoryNameRequiredException            *interface{}
	SourceAndDestinationAreSameException       *interface{}
	StatusCode                                 int64
	TargetRequiredException                    *interface{}
	TargetsRequiredException                   *interface{}
	TitleRequiredException                     *interface{}
}
