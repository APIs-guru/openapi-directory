package operations

type PostDescribeVpcEndpointServicePermissionsActionEnum string

const (
	PostDescribeVpcEndpointServicePermissionsActionEnumDescribeVpcEndpointServicePermissions PostDescribeVpcEndpointServicePermissionsActionEnum = "DescribeVpcEndpointServicePermissions"
)

type PostDescribeVpcEndpointServicePermissionsVersionEnum string

const (
	PostDescribeVpcEndpointServicePermissionsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcEndpointServicePermissionsVersionEnum = "2016-11-15"
)

type PostDescribeVpcEndpointServicePermissionsQueryParams struct {
	Action     PostDescribeVpcEndpointServicePermissionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                              `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                              `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVpcEndpointServicePermissionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcEndpointServicePermissionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcEndpointServicePermissionsRequest struct {
	QueryParams PostDescribeVpcEndpointServicePermissionsQueryParams
	Headers     PostDescribeVpcEndpointServicePermissionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcEndpointServicePermissionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
