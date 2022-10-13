package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePullRequestApprovalRuleContentXAmzTargetEnum string

const (
	UpdatePullRequestApprovalRuleContentXAmzTargetEnumCodeCommit20150413UpdatePullRequestApprovalRuleContent UpdatePullRequestApprovalRuleContentXAmzTargetEnum = "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent"
)

type UpdatePullRequestApprovalRuleContentHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePullRequestApprovalRuleContentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePullRequestApprovalRuleContentRequest struct {
	Headers UpdatePullRequestApprovalRuleContentHeaders
	Request shared.UpdatePullRequestApprovalRuleContentInput `request:"mediaType=application/json"`
}

type UpdatePullRequestApprovalRuleContentResponse struct {
	ApprovalRuleContentRequiredException          *interface{}
	ApprovalRuleDoesNotExistException             *interface{}
	ApprovalRuleNameRequiredException             *interface{}
	CannotModifyApprovalRuleFromTemplateException *interface{}
	ContentType                                   string
	EncryptionIntegrityChecksFailedException      *interface{}
	EncryptionKeyAccessDeniedException            *interface{}
	EncryptionKeyDisabledException                *interface{}
	EncryptionKeyNotFoundException                *interface{}
	EncryptionKeyUnavailableException             *interface{}
	InvalidApprovalRuleContentException           *interface{}
	InvalidApprovalRuleNameException              *interface{}
	InvalidPullRequestIDException                 *interface{}
	InvalidRuleContentSha256Exception             *interface{}
	PullRequestAlreadyClosedException             *interface{}
	PullRequestDoesNotExistException              *interface{}
	PullRequestIDRequiredException                *interface{}
	StatusCode                                    int64
	UpdatePullRequestApprovalRuleContentOutput    *shared.UpdatePullRequestApprovalRuleContentOutput
}
