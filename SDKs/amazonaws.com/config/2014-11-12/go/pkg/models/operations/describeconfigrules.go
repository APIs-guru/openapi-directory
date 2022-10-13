package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConfigRulesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeConfigRulesXAmzTargetEnum string

const (
	DescribeConfigRulesXAmzTargetEnumStarlingDoveServiceDescribeConfigRules DescribeConfigRulesXAmzTargetEnum = "StarlingDoveService.DescribeConfigRules"
)

type DescribeConfigRulesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConfigRulesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConfigRulesRequest struct {
	QueryParams DescribeConfigRulesQueryParams
	Headers     DescribeConfigRulesHeaders
	Request     shared.DescribeConfigRulesRequest `request:"mediaType=application/json"`
}

type DescribeConfigRulesResponse struct {
	ContentType                 string
	DescribeConfigRulesResponse *shared.DescribeConfigRulesResponse
	InvalidNextTokenException   *interface{}
	NoSuchConfigRuleException   *interface{}
	StatusCode                  int64
}
