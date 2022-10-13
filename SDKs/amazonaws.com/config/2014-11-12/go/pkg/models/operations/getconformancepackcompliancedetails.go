package operations

import (
	"openapi/pkg/models/shared"
)

type GetConformancePackComplianceDetailsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetConformancePackComplianceDetailsXAmzTargetEnum string

const (
	GetConformancePackComplianceDetailsXAmzTargetEnumStarlingDoveServiceGetConformancePackComplianceDetails GetConformancePackComplianceDetailsXAmzTargetEnum = "StarlingDoveService.GetConformancePackComplianceDetails"
)

type GetConformancePackComplianceDetailsHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetConformancePackComplianceDetailsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetConformancePackComplianceDetailsRequest struct {
	QueryParams GetConformancePackComplianceDetailsQueryParams
	Headers     GetConformancePackComplianceDetailsHeaders
	Request     shared.GetConformancePackComplianceDetailsRequest `request:"mediaType=application/json"`
}

type GetConformancePackComplianceDetailsResponse struct {
	ContentType                                 string
	GetConformancePackComplianceDetailsResponse *shared.GetConformancePackComplianceDetailsResponse
	InvalidLimitException                       *interface{}
	InvalidNextTokenException                   *interface{}
	InvalidParameterValueException              *interface{}
	NoSuchConfigRuleInConformancePackException  *interface{}
	NoSuchConformancePackException              *interface{}
	StatusCode                                  int64
}
