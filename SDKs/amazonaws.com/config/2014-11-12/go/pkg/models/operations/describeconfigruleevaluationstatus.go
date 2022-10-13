package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConfigRuleEvaluationStatusQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeConfigRuleEvaluationStatusXAmzTargetEnum string

const (
	DescribeConfigRuleEvaluationStatusXAmzTargetEnumStarlingDoveServiceDescribeConfigRuleEvaluationStatus DescribeConfigRuleEvaluationStatusXAmzTargetEnum = "StarlingDoveService.DescribeConfigRuleEvaluationStatus"
)

type DescribeConfigRuleEvaluationStatusHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConfigRuleEvaluationStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConfigRuleEvaluationStatusRequest struct {
	QueryParams DescribeConfigRuleEvaluationStatusQueryParams
	Headers     DescribeConfigRuleEvaluationStatusHeaders
	Request     shared.DescribeConfigRuleEvaluationStatusRequest `request:"mediaType=application/json"`
}

type DescribeConfigRuleEvaluationStatusResponse struct {
	ContentType                                string
	DescribeConfigRuleEvaluationStatusResponse *shared.DescribeConfigRuleEvaluationStatusResponse
	InvalidNextTokenException                  *interface{}
	InvalidParameterValueException             *interface{}
	NoSuchConfigRuleException                  *interface{}
	StatusCode                                 int64
}
