package operations

import (
	"openapi/pkg/models/shared"
)

type EvaluatePullRequestApprovalRulesXAmzTargetEnum string

const (
	EvaluatePullRequestApprovalRulesXAmzTargetEnumCodeCommit20150413EvaluatePullRequestApprovalRules EvaluatePullRequestApprovalRulesXAmzTargetEnum = "CodeCommit_20150413.EvaluatePullRequestApprovalRules"
)

type EvaluatePullRequestApprovalRulesHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EvaluatePullRequestApprovalRulesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EvaluatePullRequestApprovalRulesRequest struct {
	Headers EvaluatePullRequestApprovalRulesHeaders
	Request shared.EvaluatePullRequestApprovalRulesInput `request:"mediaType=application/json"`
}

type EvaluatePullRequestApprovalRulesResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	EvaluatePullRequestApprovalRulesOutput   *shared.EvaluatePullRequestApprovalRulesOutput
	InvalidPullRequestIDException            *interface{}
	InvalidRevisionIDException               *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	RevisionIDRequiredException              *interface{}
	RevisionNotCurrentException              *interface{}
	StatusCode                               int64
}
