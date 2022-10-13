package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConformancePackComplianceQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeConformancePackComplianceXAmzTargetEnum string

const (
	DescribeConformancePackComplianceXAmzTargetEnumStarlingDoveServiceDescribeConformancePackCompliance DescribeConformancePackComplianceXAmzTargetEnum = "StarlingDoveService.DescribeConformancePackCompliance"
)

type DescribeConformancePackComplianceHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConformancePackComplianceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConformancePackComplianceRequest struct {
	QueryParams DescribeConformancePackComplianceQueryParams
	Headers     DescribeConformancePackComplianceHeaders
	Request     shared.DescribeConformancePackComplianceRequest `request:"mediaType=application/json"`
}

type DescribeConformancePackComplianceResponse struct {
	ContentType                                string
	DescribeConformancePackComplianceResponse  *shared.DescribeConformancePackComplianceResponse
	InvalidLimitException                      *interface{}
	InvalidNextTokenException                  *interface{}
	InvalidParameterValueException             *interface{}
	NoSuchConfigRuleInConformancePackException *interface{}
	NoSuchConformancePackException             *interface{}
	StatusCode                                 int64
}
