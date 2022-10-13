package operations

import (
	"openapi/pkg/models/shared"
)

type GetComplianceSummaryByConfigRuleXAmzTargetEnum string

const (
	GetComplianceSummaryByConfigRuleXAmzTargetEnumStarlingDoveServiceGetComplianceSummaryByConfigRule GetComplianceSummaryByConfigRuleXAmzTargetEnum = "StarlingDoveService.GetComplianceSummaryByConfigRule"
)

type GetComplianceSummaryByConfigRuleHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetComplianceSummaryByConfigRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetComplianceSummaryByConfigRuleRequest struct {
	Headers GetComplianceSummaryByConfigRuleHeaders
}

type GetComplianceSummaryByConfigRuleResponse struct {
	ContentType                              string
	GetComplianceSummaryByConfigRuleResponse *shared.GetComplianceSummaryByConfigRuleResponse
	StatusCode                               int64
}
