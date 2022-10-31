package operations

import (
	"openapi/pkg/models/shared"
)

type GetPullRequestOverrideStateXAmzTargetEnum string

const (
	GetPullRequestOverrideStateXAmzTargetEnumCodeCommit20150413GetPullRequestOverrideState GetPullRequestOverrideStateXAmzTargetEnum = "CodeCommit_20150413.GetPullRequestOverrideState"
)

type GetPullRequestOverrideStateHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPullRequestOverrideStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetPullRequestOverrideStateRequest struct {
	Headers GetPullRequestOverrideStateHeaders
	Request shared.GetPullRequestOverrideStateInput `request:"mediaType=application/json"`
}

type GetPullRequestOverrideStateResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetPullRequestOverrideStateOutput        *shared.GetPullRequestOverrideStateOutput
	InvalidPullRequestIDException            *interface{}
	InvalidRevisionIDException               *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	RevisionIDRequiredException              *interface{}
	StatusCode                               int64
}
