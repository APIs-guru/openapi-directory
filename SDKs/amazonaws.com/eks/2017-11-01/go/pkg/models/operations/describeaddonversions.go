package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAddonVersionsQueryParams struct {
	AddonName         *string `queryParam:"style=form,explode=true,name=addonName"`
	KubernetesVersion *string `queryParam:"style=form,explode=true,name=kubernetesVersion"`
	MaxResults        *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken         *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeAddonVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeAddonVersionsRequest struct {
	QueryParams DescribeAddonVersionsQueryParams
	Headers     DescribeAddonVersionsHeaders
}

type DescribeAddonVersionsResponse struct {
	ContentType                   string
	DescribeAddonVersionsResponse *shared.DescribeAddonVersionsResponse
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	ServerException               *interface{}
	StatusCode                    int64
}
