package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePullRequestStatusXAmzTargetEnum string

const (
	UpdatePullRequestStatusXAmzTargetEnumCodeCommit20150413UpdatePullRequestStatus UpdatePullRequestStatusXAmzTargetEnum = "CodeCommit_20150413.UpdatePullRequestStatus"
)

type UpdatePullRequestStatusHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePullRequestStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdatePullRequestStatusRequest struct {
	Headers UpdatePullRequestStatusHeaders
	Request shared.UpdatePullRequestStatusInput `request:"mediaType=application/json"`
}

type UpdatePullRequestStatusResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidPullRequestIDException            *interface{}
	InvalidPullRequestStatusException        *interface{}
	InvalidPullRequestStatusUpdateException  *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	PullRequestStatusRequiredException       *interface{}
	StatusCode                               int64
	UpdatePullRequestStatusOutput            *shared.UpdatePullRequestStatusOutput
}
