package operations

import (
	"openapi/pkg/models/shared"
)

type GetAggregateConformancePackComplianceSummaryQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetAggregateConformancePackComplianceSummaryXAmzTargetEnum string

const (
	GetAggregateConformancePackComplianceSummaryXAmzTargetEnumStarlingDoveServiceGetAggregateConformancePackComplianceSummary GetAggregateConformancePackComplianceSummaryXAmzTargetEnum = "StarlingDoveService.GetAggregateConformancePackComplianceSummary"
)

type GetAggregateConformancePackComplianceSummaryHeaders struct {
	XAmzAlgorithm     *string                                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAggregateConformancePackComplianceSummaryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAggregateConformancePackComplianceSummaryRequest struct {
	QueryParams GetAggregateConformancePackComplianceSummaryQueryParams
	Headers     GetAggregateConformancePackComplianceSummaryHeaders
	Request     shared.GetAggregateConformancePackComplianceSummaryRequest `request:"mediaType=application/json"`
}

type GetAggregateConformancePackComplianceSummaryResponse struct {
	ContentType                                          string
	GetAggregateConformancePackComplianceSummaryResponse *shared.GetAggregateConformancePackComplianceSummaryResponse
	InvalidLimitException                                *interface{}
	InvalidNextTokenException                            *interface{}
	NoSuchConfigurationAggregatorException               *interface{}
	StatusCode                                           int64
	ValidationException                                  *interface{}
}
