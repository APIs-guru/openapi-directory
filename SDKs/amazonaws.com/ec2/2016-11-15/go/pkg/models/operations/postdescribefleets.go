package operations

type PostDescribeFleetsActionEnum string

const (
	PostDescribeFleetsActionEnumDescribeFleets PostDescribeFleetsActionEnum = "DescribeFleets"
)

type PostDescribeFleetsVersionEnum string

const (
	PostDescribeFleetsVersionEnumTwoThousandAndSixteen1115 PostDescribeFleetsVersionEnum = "2016-11-15"
)

type PostDescribeFleetsQueryParams struct {
	Action     PostDescribeFleetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                       `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeFleetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeFleetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeFleetsRequest struct {
	QueryParams PostDescribeFleetsQueryParams
	Headers     PostDescribeFleetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeFleetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
