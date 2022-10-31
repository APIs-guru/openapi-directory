package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAggregateComplianceByConfigRulesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeAggregateComplianceByConfigRulesXAmzTargetEnum string

const (
	DescribeAggregateComplianceByConfigRulesXAmzTargetEnumStarlingDoveServiceDescribeAggregateComplianceByConfigRules DescribeAggregateComplianceByConfigRulesXAmzTargetEnum = "StarlingDoveService.DescribeAggregateComplianceByConfigRules"
)

type DescribeAggregateComplianceByConfigRulesHeaders struct {
	XAmzAlgorithm     *string                                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAggregateComplianceByConfigRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAggregateComplianceByConfigRulesRequest struct {
	QueryParams DescribeAggregateComplianceByConfigRulesQueryParams
	Headers     DescribeAggregateComplianceByConfigRulesHeaders
	Request     shared.DescribeAggregateComplianceByConfigRulesRequest `request:"mediaType=application/json"`
}

type DescribeAggregateComplianceByConfigRulesResponse struct {
	ContentType                                      string
	DescribeAggregateComplianceByConfigRulesResponse *shared.DescribeAggregateComplianceByConfigRulesResponse
	InvalidLimitException                            *interface{}
	InvalidNextTokenException                        *interface{}
	NoSuchConfigurationAggregatorException           *interface{}
	StatusCode                                       int64
	ValidationException                              *interface{}
}
