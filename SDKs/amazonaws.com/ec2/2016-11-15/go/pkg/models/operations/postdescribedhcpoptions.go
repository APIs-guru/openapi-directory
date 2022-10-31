package operations

type PostDescribeDhcpOptionsActionEnum string

const (
	PostDescribeDhcpOptionsActionEnumDescribeDhcpOptions PostDescribeDhcpOptionsActionEnum = "DescribeDhcpOptions"
)

type PostDescribeDhcpOptionsVersionEnum string

const (
	PostDescribeDhcpOptionsVersionEnumTwoThousandAndSixteen1115 PostDescribeDhcpOptionsVersionEnum = "2016-11-15"
)

type PostDescribeDhcpOptionsQueryParams struct {
	Action     PostDescribeDhcpOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                            `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeDhcpOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDhcpOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDhcpOptionsRequest struct {
	QueryParams PostDescribeDhcpOptionsQueryParams
	Headers     PostDescribeDhcpOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDhcpOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
