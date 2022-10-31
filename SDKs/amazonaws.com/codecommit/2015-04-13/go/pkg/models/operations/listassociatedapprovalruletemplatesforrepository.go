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
	XAmzAlgorithm     *string                                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
