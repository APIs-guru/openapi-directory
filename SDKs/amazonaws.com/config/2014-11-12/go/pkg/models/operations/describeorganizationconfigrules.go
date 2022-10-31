package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOrganizationConfigRulesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeOrganizationConfigRulesXAmzTargetEnum string

const (
	DescribeOrganizationConfigRulesXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConfigRules DescribeOrganizationConfigRulesXAmzTargetEnum = "StarlingDoveService.DescribeOrganizationConfigRules"
)

type DescribeOrganizationConfigRulesHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOrganizationConfigRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeOrganizationConfigRulesRequest struct {
	QueryParams DescribeOrganizationConfigRulesQueryParams
	Headers     DescribeOrganizationConfigRulesHeaders
	Request     shared.DescribeOrganizationConfigRulesRequest `request:"mediaType=application/json"`
}

type DescribeOrganizationConfigRulesResponse struct {
	ContentType                             string
	DescribeOrganizationConfigRulesResponse *shared.DescribeOrganizationConfigRulesResponse
	InvalidLimitException                   *interface{}
	InvalidNextTokenException               *interface{}
	NoSuchOrganizationConfigRuleException   *interface{}
	OrganizationAccessDeniedException       *interface{}
	StatusCode                              int64
}
