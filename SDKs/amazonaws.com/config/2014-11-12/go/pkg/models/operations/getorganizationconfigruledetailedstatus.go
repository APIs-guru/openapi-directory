package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationConfigRuleDetailedStatusQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum string

const (
	GetOrganizationConfigRuleDetailedStatusXAmzTargetEnumStarlingDoveServiceGetOrganizationConfigRuleDetailedStatus GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum = "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus"
)

type GetOrganizationConfigRuleDetailedStatusHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOrganizationConfigRuleDetailedStatusRequest struct {
	QueryParams GetOrganizationConfigRuleDetailedStatusQueryParams
	Headers     GetOrganizationConfigRuleDetailedStatusHeaders
	Request     shared.GetOrganizationConfigRuleDetailedStatusRequest `request:"mediaType=application/json"`
}

type GetOrganizationConfigRuleDetailedStatusResponse struct {
	ContentType                                     string
	GetOrganizationConfigRuleDetailedStatusResponse *shared.GetOrganizationConfigRuleDetailedStatusResponse
	InvalidLimitException                           *interface{}
	InvalidNextTokenException                       *interface{}
	NoSuchOrganizationConfigRuleException           *interface{}
	OrganizationAccessDeniedException               *interface{}
	StatusCode                                      int64
}
