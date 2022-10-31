package operations

type PostDescribePrefixListsActionEnum string

const (
	PostDescribePrefixListsActionEnumDescribePrefixLists PostDescribePrefixListsActionEnum = "DescribePrefixLists"
)

type PostDescribePrefixListsVersionEnum string

const (
	PostDescribePrefixListsVersionEnumTwoThousandAndSixteen1115 PostDescribePrefixListsVersionEnum = "2016-11-15"
)

type PostDescribePrefixListsQueryParams struct {
	Action     PostDescribePrefixListsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                            `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribePrefixListsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribePrefixListsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribePrefixListsRequest struct {
	QueryParams PostDescribePrefixListsQueryParams
	Headers     PostDescribePrefixListsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribePrefixListsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
