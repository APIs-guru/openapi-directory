package operations

import (
	"openapi/pkg/models/shared"
)

type GetComplianceDetailsByConfigRuleQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetComplianceDetailsByConfigRuleXAmzTargetEnum string

const (
	GetComplianceDetailsByConfigRuleXAmzTargetEnumStarlingDoveServiceGetComplianceDetailsByConfigRule GetComplianceDetailsByConfigRuleXAmzTargetEnum = "StarlingDoveService.GetComplianceDetailsByConfigRule"
)

type GetComplianceDetailsByConfigRuleHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetComplianceDetailsByConfigRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetComplianceDetailsByConfigRuleRequest struct {
	QueryParams GetComplianceDetailsByConfigRuleQueryParams
	Headers     GetComplianceDetailsByConfigRuleHeaders
	Request     shared.GetComplianceDetailsByConfigRuleRequest `request:"mediaType=application/json"`
}

type GetComplianceDetailsByConfigRuleResponse struct {
	ContentType                              string
	GetComplianceDetailsByConfigRuleResponse *shared.GetComplianceDetailsByConfigRuleResponse
	InvalidNextTokenException                *interface{}
	InvalidParameterValueException           *interface{}
	NoSuchConfigRuleException                *interface{}
	StatusCode                               int64
}
