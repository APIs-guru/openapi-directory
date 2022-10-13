package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOrganizationConfigRuleStatusesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeOrganizationConfigRuleStatusesXAmzTargetEnum string

const (
	DescribeOrganizationConfigRuleStatusesXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConfigRuleStatuses DescribeOrganizationConfigRuleStatusesXAmzTargetEnum = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses"
)

type DescribeOrganizationConfigRuleStatusesHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOrganizationConfigRuleStatusesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeOrganizationConfigRuleStatusesRequest struct {
	QueryParams DescribeOrganizationConfigRuleStatusesQueryParams
	Headers     DescribeOrganizationConfigRuleStatusesHeaders
	Request     shared.DescribeOrganizationConfigRuleStatusesRequest `request:"mediaType=application/json"`
}

type DescribeOrganizationConfigRuleStatusesResponse struct {
	ContentType                                    string
	DescribeOrganizationConfigRuleStatusesResponse *shared.DescribeOrganizationConfigRuleStatusesResponse
	InvalidLimitException                          *interface{}
	InvalidNextTokenException                      *interface{}
	NoSuchOrganizationConfigRuleException          *interface{}
	OrganizationAccessDeniedException              *interface{}
	StatusCode                                     int64
}
