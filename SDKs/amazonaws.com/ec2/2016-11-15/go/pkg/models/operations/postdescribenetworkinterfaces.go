package operations

type PostDescribeNetworkInterfacesActionEnum string

const (
	PostDescribeNetworkInterfacesActionEnumDescribeNetworkInterfaces PostDescribeNetworkInterfacesActionEnum = "DescribeNetworkInterfaces"
)

type PostDescribeNetworkInterfacesVersionEnum string

const (
	PostDescribeNetworkInterfacesVersionEnumTwoThousandAndSixteen1115 PostDescribeNetworkInterfacesVersionEnum = "2016-11-15"
)

type PostDescribeNetworkInterfacesQueryParams struct {
	Action     PostDescribeNetworkInterfacesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                  `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeNetworkInterfacesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNetworkInterfacesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeNetworkInterfacesRequest struct {
	QueryParams PostDescribeNetworkInterfacesQueryParams
	Headers     PostDescribeNetworkInterfacesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNetworkInterfacesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
