package operations

import (
	"openapi/pkg/models/shared"
)

type ListRepositoriesForApprovalRuleTemplateQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum string

const (
	ListRepositoriesForApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413ListRepositoriesForApprovalRuleTemplate ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum = "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate"
)

type ListRepositoriesForApprovalRuleTemplateHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRepositoriesForApprovalRuleTemplateRequest struct {
	QueryParams ListRepositoriesForApprovalRuleTemplateQueryParams
	Headers     ListRepositoriesForApprovalRuleTemplateHeaders
	Request     shared.ListRepositoriesForApprovalRuleTemplateInput `request:"mediaType=application/json"`
}

type ListRepositoriesForApprovalRuleTemplateResponse struct {
	ApprovalRuleTemplateDoesNotExistException     *interface{}
	ApprovalRuleTemplateNameRequiredException     *interface{}
	ContentType                                   string
	EncryptionIntegrityChecksFailedException      *interface{}
	EncryptionKeyAccessDeniedException            *interface{}
	EncryptionKeyDisabledException                *interface{}
	EncryptionKeyNotFoundException                *interface{}
	EncryptionKeyUnavailableException             *interface{}
	InvalidApprovalRuleTemplateNameException      *interface{}
	InvalidContinuationTokenException             *interface{}
	InvalidMaxResultsException                    *interface{}
	ListRepositoriesForApprovalRuleTemplateOutput *shared.ListRepositoriesForApprovalRuleTemplateOutput
	StatusCode                                    int64
}
