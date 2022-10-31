package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePullRequestApprovalRuleXAmzTargetEnum string

const (
	DeletePullRequestApprovalRuleXAmzTargetEnumCodeCommit20150413DeletePullRequestApprovalRule DeletePullRequestApprovalRuleXAmzTargetEnum = "CodeCommit_20150413.DeletePullRequestApprovalRule"
)

type DeletePullRequestApprovalRuleHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePullRequestApprovalRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeletePullRequestApprovalRuleRequest struct {
	Headers DeletePullRequestApprovalRuleHeaders
	Request shared.DeletePullRequestApprovalRuleInput `request:"mediaType=application/json"`
}

type DeletePullRequestApprovalRuleResponse struct {
	ApprovalRuleNameRequiredException             *interface{}
	CannotDeleteApprovalRuleFromTemplateException *interface{}
	ContentType                                   string
	DeletePullRequestApprovalRuleOutput           *shared.DeletePullRequestApprovalRuleOutput
	EncryptionIntegrityChecksFailedException      *interface{}
	EncryptionKeyAccessDeniedException            *interface{}
	EncryptionKeyDisabledException                *interface{}
	EncryptionKeyNotFoundException                *interface{}
	EncryptionKeyUnavailableException             *interface{}
	InvalidApprovalRuleNameException              *interface{}
	InvalidPullRequestIDException                 *interface{}
	PullRequestAlreadyClosedException             *interface{}
	PullRequestDoesNotExistException              *interface{}
	PullRequestIDRequiredException                *interface{}
	StatusCode                                    int64
}
