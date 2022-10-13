package operations

import (
	"openapi/pkg/models/shared"
)

type ListApprovalRuleTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListApprovalRuleTemplatesXAmzTargetEnum string

const (
	ListApprovalRuleTemplatesXAmzTargetEnumCodeCommit20150413ListApprovalRuleTemplates ListApprovalRuleTemplatesXAmzTargetEnum = "CodeCommit_20150413.ListApprovalRuleTemplates"
)

type ListApprovalRuleTemplatesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListApprovalRuleTemplatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListApprovalRuleTemplatesRequest struct {
	QueryParams ListApprovalRuleTemplatesQueryParams
	Headers     ListApprovalRuleTemplatesHeaders
	Request     shared.ListApprovalRuleTemplatesInput `request:"mediaType=application/json"`
}

type ListApprovalRuleTemplatesResponse struct {
	ContentType                       string
	InvalidContinuationTokenException *interface{}
	InvalidMaxResultsException        *interface{}
	ListApprovalRuleTemplatesOutput   *shared.ListApprovalRuleTemplatesOutput
	StatusCode                        int64
}
