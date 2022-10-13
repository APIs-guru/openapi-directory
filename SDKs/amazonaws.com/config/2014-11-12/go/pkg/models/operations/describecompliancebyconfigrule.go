package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeComplianceByConfigRuleQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeComplianceByConfigRuleXAmzTargetEnum string

const (
	DescribeComplianceByConfigRuleXAmzTargetEnumStarlingDoveServiceDescribeComplianceByConfigRule DescribeComplianceByConfigRuleXAmzTargetEnum = "StarlingDoveService.DescribeComplianceByConfigRule"
)

type DescribeComplianceByConfigRuleHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeComplianceByConfigRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeComplianceByConfigRuleRequest struct {
	QueryParams DescribeComplianceByConfigRuleQueryParams
	Headers     DescribeComplianceByConfigRuleHeaders
	Request     shared.DescribeComplianceByConfigRuleRequest `request:"mediaType=application/json"`
}

type DescribeComplianceByConfigRuleResponse struct {
	ContentType                            string
	DescribeComplianceByConfigRuleResponse *shared.DescribeComplianceByConfigRuleResponse
	InvalidNextTokenException              *interface{}
	InvalidParameterValueException         *interface{}
	NoSuchConfigRuleException              *interface{}
	StatusCode                             int64
}
