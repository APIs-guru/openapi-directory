package operations

import (
	"openapi/pkg/models/shared"
)

type GetConformancePackComplianceSummaryQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetConformancePackComplianceSummaryXAmzTargetEnum string

const (
	GetConformancePackComplianceSummaryXAmzTargetEnumStarlingDoveServiceGetConformancePackComplianceSummary GetConformancePackComplianceSummaryXAmzTargetEnum = "StarlingDoveService.GetConformancePackComplianceSummary"
)

type GetConformancePackComplianceSummaryHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetConformancePackComplianceSummaryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetConformancePackComplianceSummaryRequest struct {
	QueryParams GetConformancePackComplianceSummaryQueryParams
	Headers     GetConformancePackComplianceSummaryHeaders
	Request     shared.GetConformancePackComplianceSummaryRequest `request:"mediaType=application/json"`
}

type GetConformancePackComplianceSummaryResponse struct {
	ContentType                                 string
	GetConformancePackComplianceSummaryResponse *shared.GetConformancePackComplianceSummaryResponse
	InvalidLimitException                       *interface{}
	InvalidNextTokenException                   *interface{}
	NoSuchConformancePackException              *interface{}
	StatusCode                                  int64
}
