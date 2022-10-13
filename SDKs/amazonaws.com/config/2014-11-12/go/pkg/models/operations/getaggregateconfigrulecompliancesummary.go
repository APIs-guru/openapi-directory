package operations

import (
	"openapi/pkg/models/shared"
)

type GetAggregateConfigRuleComplianceSummaryQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum string

const (
	GetAggregateConfigRuleComplianceSummaryXAmzTargetEnumStarlingDoveServiceGetAggregateConfigRuleComplianceSummary GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum = "StarlingDoveService.GetAggregateConfigRuleComplianceSummary"
)

type GetAggregateConfigRuleComplianceSummaryHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAggregateConfigRuleComplianceSummaryRequest struct {
	QueryParams GetAggregateConfigRuleComplianceSummaryQueryParams
	Headers     GetAggregateConfigRuleComplianceSummaryHeaders
	Request     shared.GetAggregateConfigRuleComplianceSummaryRequest `request:"mediaType=application/json"`
}

type GetAggregateConfigRuleComplianceSummaryResponse struct {
	ContentType                                     string
	GetAggregateConfigRuleComplianceSummaryResponse *shared.GetAggregateConfigRuleComplianceSummaryResponse
	InvalidLimitException                           *interface{}
	InvalidNextTokenException                       *interface{}
	NoSuchConfigurationAggregatorException          *interface{}
	StatusCode                                      int64
	ValidationException                             *interface{}
}
