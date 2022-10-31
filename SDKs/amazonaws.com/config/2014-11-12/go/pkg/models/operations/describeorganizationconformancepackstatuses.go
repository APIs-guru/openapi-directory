package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOrganizationConformancePackStatusesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeOrganizationConformancePackStatusesXAmzTargetEnum string

const (
	DescribeOrganizationConformancePackStatusesXAmzTargetEnumStarlingDoveServiceDescribeOrganizationConformancePackStatuses DescribeOrganizationConformancePackStatusesXAmzTargetEnum = "StarlingDoveService.DescribeOrganizationConformancePackStatuses"
)

type DescribeOrganizationConformancePackStatusesHeaders struct {
	XAmzAlgorithm     *string                                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOrganizationConformancePackStatusesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeOrganizationConformancePackStatusesRequest struct {
	QueryParams DescribeOrganizationConformancePackStatusesQueryParams
	Headers     DescribeOrganizationConformancePackStatusesHeaders
	Request     shared.DescribeOrganizationConformancePackStatusesRequest `request:"mediaType=application/json"`
}

type DescribeOrganizationConformancePackStatusesResponse struct {
	ContentType                                         string
	DescribeOrganizationConformancePackStatusesResponse *shared.DescribeOrganizationConformancePackStatusesResponse
	InvalidLimitException                               *interface{}
	InvalidNextTokenException                           *interface{}
	NoSuchOrganizationConformancePackException          *interface{}
	OrganizationAccessDeniedException                   *interface{}
	StatusCode                                          int64
}
