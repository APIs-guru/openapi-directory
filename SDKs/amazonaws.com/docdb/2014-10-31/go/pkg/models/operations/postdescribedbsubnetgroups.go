package operations

type PostDescribeDbSubnetGroupsActionEnum string

const (
	PostDescribeDbSubnetGroupsActionEnumDescribeDbSubnetGroups PostDescribeDbSubnetGroupsActionEnum = "DescribeDBSubnetGroups"
)

type PostDescribeDbSubnetGroupsVersionEnum string

const (
	PostDescribeDbSubnetGroupsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbSubnetGroupsVersionEnum = "2014-10-31"
)

type PostDescribeDbSubnetGroupsQueryParams struct {
	Action     PostDescribeDbSubnetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                               `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                               `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbSubnetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbSubnetGroupsRequest struct {
	QueryParams PostDescribeDbSubnetGroupsQueryParams
	Headers     PostDescribeDbSubnetGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbSubnetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
