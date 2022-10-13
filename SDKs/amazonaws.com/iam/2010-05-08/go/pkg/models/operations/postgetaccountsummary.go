package operations

type PostGetAccountSummaryActionEnum string

const (
	PostGetAccountSummaryActionEnumGetAccountSummary PostGetAccountSummaryActionEnum = "GetAccountSummary"
)

type PostGetAccountSummaryVersionEnum string

const (
	PostGetAccountSummaryVersionEnumTwoThousandAndTen0508 PostGetAccountSummaryVersionEnum = "2010-05-08"
)

type PostGetAccountSummaryQueryParams struct {
	Action  PostGetAccountSummaryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetAccountSummaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetAccountSummaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetAccountSummaryRequest struct {
	QueryParams PostGetAccountSummaryQueryParams
	Headers     PostGetAccountSummaryHeaders
}

type PostGetAccountSummaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
