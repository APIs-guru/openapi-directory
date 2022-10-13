package operations

import (
	"openapi/pkg/models/shared"
)

type GetComplianceSummaryByResourceTypeXAmzTargetEnum string

const (
	GetComplianceSummaryByResourceTypeXAmzTargetEnumStarlingDoveServiceGetComplianceSummaryByResourceType GetComplianceSummaryByResourceTypeXAmzTargetEnum = "StarlingDoveService.GetComplianceSummaryByResourceType"
)

type GetComplianceSummaryByResourceTypeHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetComplianceSummaryByResourceTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetComplianceSummaryByResourceTypeRequest struct {
	Headers GetComplianceSummaryByResourceTypeHeaders
	Request shared.GetComplianceSummaryByResourceTypeRequest `request:"mediaType=application/json"`
}

type GetComplianceSummaryByResourceTypeResponse struct {
	ContentType                                string
	GetComplianceSummaryByResourceTypeResponse *shared.GetComplianceSummaryByResourceTypeResponse
	InvalidParameterValueException             *interface{}
	StatusCode                                 int64
}
