package operations

type PostAcceptReservedInstancesExchangeQuoteActionEnum string

const (
	PostAcceptReservedInstancesExchangeQuoteActionEnumAcceptReservedInstancesExchangeQuote PostAcceptReservedInstancesExchangeQuoteActionEnum = "AcceptReservedInstancesExchangeQuote"
)

type PostAcceptReservedInstancesExchangeQuoteVersionEnum string

const (
	PostAcceptReservedInstancesExchangeQuoteVersionEnumTwoThousandAndSixteen1115 PostAcceptReservedInstancesExchangeQuoteVersionEnum = "2016-11-15"
)

type PostAcceptReservedInstancesExchangeQuoteQueryParams struct {
	Action  PostAcceptReservedInstancesExchangeQuoteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAcceptReservedInstancesExchangeQuoteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAcceptReservedInstancesExchangeQuoteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAcceptReservedInstancesExchangeQuoteRequest struct {
	QueryParams PostAcceptReservedInstancesExchangeQuoteQueryParams
	Headers     PostAcceptReservedInstancesExchangeQuoteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAcceptReservedInstancesExchangeQuoteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
