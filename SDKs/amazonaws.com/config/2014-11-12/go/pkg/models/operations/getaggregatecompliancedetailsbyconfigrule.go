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
	XAmzAlgorithm     *string                                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
