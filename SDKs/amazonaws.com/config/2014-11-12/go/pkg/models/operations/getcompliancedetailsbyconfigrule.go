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
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetComplianceDetailsByConfigRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
