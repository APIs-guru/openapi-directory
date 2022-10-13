package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePullRequestApprovalRuleXAmzTargetEnum string

const (
	CreatePullRequestApprovalRuleXAmzTargetEnumCodeCommit20150413CreatePullRequestApprovalRule CreatePullRequestApprovalRuleXAmzTargetEnum = "CodeCommit_20150413.CreatePullRequestApprovalRule"
)

type CreatePullRequestApprovalRuleHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePullRequestApprovalRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePullRequestApprovalRuleRequest struct {
	Headers CreatePullRequestApprovalRuleHeaders
	Request shared.CreatePullRequestApprovalRuleInput `request:"mediaType=application/json"`
}

type CreatePullRequestApprovalRuleResponse struct {
	ApprovalRuleContentRequiredException     *interface{}
	ApprovalRuleNameAlreadyExistsException   *interface{}
	ApprovalRuleNameRequiredException        *interface{}
	ContentType                              string
	CreatePullRequestApprovalRuleOutput      *shared.CreatePullRequestApprovalRuleOutput
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidApprovalRuleContentException      *interface{}
	InvalidApprovalRuleNameException         *interface{}
	InvalidPullRequestIDException            *interface{}
	NumberOfRulesExceededException           *interface{}
	PullRequestAlreadyClosedException        *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	StatusCode                               int64
}
