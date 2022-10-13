package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOrganizationConformancePacksQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeOrganizationConformancePacksXAmzTargetEnum string

const (
	DescribeOrganizationConformancePacksXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConformancePacks DescribeOrganizationConformancePacksXAmzTargetEnum = "StarlingDoveService.DescribeOrganizationConformancePacks"
)

type DescribeOrganizationConformancePacksHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOrganizationConformancePacksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeOrganizationConformancePacksRequest struct {
	QueryParams DescribeOrganizationConformancePacksQueryParams
	Headers     DescribeOrganizationConformancePacksHeaders
	Request     shared.DescribeOrganizationConformancePacksRequest `request:"mediaType=application/json"`
}

type DescribeOrganizationConformancePacksResponse struct {
	ContentType                                  string
	DescribeOrganizationConformancePacksResponse *shared.DescribeOrganizationConformancePacksResponse
	InvalidLimitException                        *interface{}
	InvalidNextTokenException                    *interface{}
	NoSuchOrganizationConformancePackException   *interface{}
	OrganizationAccessDeniedException            *interface{}
	StatusCode                                   int64
}
