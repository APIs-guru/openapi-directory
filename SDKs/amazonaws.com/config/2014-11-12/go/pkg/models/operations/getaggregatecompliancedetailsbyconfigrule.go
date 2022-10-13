package operations

import (
	"openapi/pkg/models/shared"
)

type GetAggregateComplianceDetailsByConfigRuleQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum string

const (
	GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnumStarlingDoveServiceGetAggregateComplianceDetailsByConfigRule GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum = "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule"
)

type GetAggregateComplianceDetailsByConfigRuleHeaders struct {
	XAmzAlgorithm     *string                                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAggregateComplianceDetailsByConfigRuleRequest struct {
	QueryParams GetAggregateComplianceDetailsByConfigRuleQueryParams
	Headers     GetAggregateComplianceDetailsByConfigRuleHeaders
	Request     shared.GetAggregateComplianceDetailsByConfigRuleRequest `request:"mediaType=application/json"`
}

type GetAggregateComplianceDetailsByConfigRuleResponse struct {
	ContentType                                       string
	GetAggregateComplianceDetailsByConfigRuleResponse *shared.GetAggregateComplianceDetailsByConfigRuleResponse
	InvalidLimitException                             *interface{}
	InvalidNextTokenException                         *interface{}
	NoSuchConfigurationAggregatorException            *interface{}
	StatusCode                                        int64
	ValidationException                               *interface{}
}
