package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationConformancePackDetailedStatusQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetOrganizationConformancePackDetailedStatusXAmzTargetEnum string

const (
	GetOrganizationConformancePackDetailedStatusXAmzTargetEnumStarlingDoveServiceGetOrganizationConformancePackDetailedStatus GetOrganizationConformancePackDetailedStatusXAmzTargetEnum = "StarlingDoveService.GetOrganizationConformancePackDetailedStatus"
)

type GetOrganizationConformancePackDetailedStatusHeaders struct {
	XAmzAlgorithm     *string                                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOrganizationConformancePackDetailedStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetOrganizationConformancePackDetailedStatusRequest struct {
	QueryParams GetOrganizationConformancePackDetailedStatusQueryParams
	Headers     GetOrganizationConformancePackDetailedStatusHeaders
	Request     shared.GetOrganizationConformancePackDetailedStatusRequest `request:"mediaType=application/json"`
}

type GetOrganizationConformancePackDetailedStatusResponse struct {
	ContentType                                          string
	GetOrganizationConformancePackDetailedStatusResponse *shared.GetOrganizationConformancePackDetailedStatusResponse
	InvalidLimitException                                *interface{}
	InvalidNextTokenException                            *interface{}
	NoSuchOrganizationConformancePackException           *interface{}
	OrganizationAccessDeniedException                    *interface{}
	StatusCode                                           int64
}
