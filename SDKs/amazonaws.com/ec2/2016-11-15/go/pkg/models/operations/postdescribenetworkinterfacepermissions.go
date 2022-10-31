package operations

type PostDescribeNetworkInterfacePermissionsActionEnum string

const (
	PostDescribeNetworkInterfacePermissionsActionEnumDescribeNetworkInterfacePermissions PostDescribeNetworkInterfacePermissionsActionEnum = "DescribeNetworkInterfacePermissions"
)

type PostDescribeNetworkInterfacePermissionsVersionEnum string

const (
	PostDescribeNetworkInterfacePermissionsVersionEnumTwoThousandAndSixteen1115 PostDescribeNetworkInterfacePermissionsVersionEnum = "2016-11-15"
)

type PostDescribeNetworkInterfacePermissionsQueryParams struct {
	Action     PostDescribeNetworkInterfacePermissionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                            `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeNetworkInterfacePermissionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNetworkInterfacePermissionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeNetworkInterfacePermissionsRequest struct {
	QueryParams PostDescribeNetworkInterfacePermissionsQueryParams
	Headers     PostDescribeNetworkInterfacePermissionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNetworkInterfacePermissionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
