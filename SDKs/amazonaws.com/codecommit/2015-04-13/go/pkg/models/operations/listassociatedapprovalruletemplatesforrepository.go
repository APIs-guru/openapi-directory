package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum string

const (
	ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnumCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepository ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum = "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository"
)

type ListAssociatedApprovalRuleTemplatesForRepositoryHeaders struct {
	XAmzAlgorithm     *string                                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssociatedApprovalRuleTemplatesForRepositoryRequest struct {
	QueryParams ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams
	Headers     ListAssociatedApprovalRuleTemplatesForRepositoryHeaders
	Request     shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput `request:"mediaType=application/json"`
}

type ListAssociatedApprovalRuleTemplatesForRepositoryResponse struct {
	ContentType                                            string
	EncryptionIntegrityChecksFailedException               *interface{}
	EncryptionKeyAccessDeniedException                     *interface{}
	EncryptionKeyDisabledException                         *interface{}
	EncryptionKeyNotFoundException                         *interface{}
	EncryptionKeyUnavailableException                      *interface{}
	InvalidContinuationTokenException                      *interface{}
	InvalidMaxResultsException                             *interface{}
	InvalidRepositoryNameException                         *interface{}
	ListAssociatedApprovalRuleTemplatesForRepositoryOutput *shared.ListAssociatedApprovalRuleTemplatesForRepositoryOutput
	RepositoryDoesNotExistException                        *interface{}
	RepositoryNameRequiredException                        *interface{}
	StatusCode                                             int64
}
