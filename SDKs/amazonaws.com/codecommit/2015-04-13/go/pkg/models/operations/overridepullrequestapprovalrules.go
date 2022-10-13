package operations

import (
	"openapi/pkg/models/shared"
)

type OverridePullRequestApprovalRulesXAmzTargetEnum string

const (
	OverridePullRequestApprovalRulesXAmzTargetEnumCodeCommit20150413OverridePullRequestApprovalRules OverridePullRequestApprovalRulesXAmzTargetEnum = "CodeCommit_20150413.OverridePullRequestApprovalRules"
)

type OverridePullRequestApprovalRulesHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        OverridePullRequestApprovalRulesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type OverridePullRequestApprovalRulesRequest struct {
	Headers OverridePullRequestApprovalRulesHeaders
	Request shared.OverridePullRequestApprovalRulesInput `request:"mediaType=application/json"`
}

type OverridePullRequestApprovalRulesResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidOverrideStatusException           *interface{}
	InvalidPullRequestIDException            *interface{}
	InvalidRevisionIDException               *interface{}
	OverrideAlreadySetException              *interface{}
	OverrideStatusRequiredException          *interface{}
	PullRequestAlreadyClosedException        *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	RevisionIDRequiredException              *interface{}
	RevisionNotCurrentException              *interface{}
	StatusCode                               int64
}
