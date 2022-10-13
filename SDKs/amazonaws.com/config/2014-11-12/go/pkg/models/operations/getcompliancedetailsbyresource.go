package operations

import (
	"openapi/pkg/models/shared"
)

type GetComplianceDetailsByResourceQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetComplianceDetailsByResourceXAmzTargetEnum string

const (
	GetComplianceDetailsByResourceXAmzTargetEnumStarlingDoveServiceGetComplianceDetailsByResource GetComplianceDetailsByResourceXAmzTargetEnum = "StarlingDoveService.GetComplianceDetailsByResource"
)

type GetComplianceDetailsByResourceHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetComplianceDetailsByResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetComplianceDetailsByResourceRequest struct {
	QueryParams GetComplianceDetailsByResourceQueryParams
	Headers     GetComplianceDetailsByResourceHeaders
	Request     shared.GetComplianceDetailsByResourceRequest `request:"mediaType=application/json"`
}

type GetComplianceDetailsByResourceResponse struct {
	ContentType                            string
	GetComplianceDetailsByResourceResponse *shared.GetComplianceDetailsByResourceResponse
	InvalidParameterValueException         *interface{}
	StatusCode                             int64
}
