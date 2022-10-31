package operations

type PostCreateAppCookieStickinessPolicyActionEnum string

const (
	PostCreateAppCookieStickinessPolicyActionEnumCreateAppCookieStickinessPolicy PostCreateAppCookieStickinessPolicyActionEnum = "CreateAppCookieStickinessPolicy"
)

type PostCreateAppCookieStickinessPolicyVersionEnum string

const (
	PostCreateAppCookieStickinessPolicyVersionEnumTwoThousandAndTwelve0601 PostCreateAppCookieStickinessPolicyVersionEnum = "2012-06-01"
)

type PostCreateAppCookieStickinessPolicyQueryParams struct {
	Action  PostCreateAppCookieStickinessPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateAppCookieStickinessPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateAppCookieStickinessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateAppCookieStickinessPolicyRequest struct {
	QueryParams PostCreateAppCookieStickinessPolicyQueryParams
	Headers     PostCreateAppCookieStickinessPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateAppCookieStickinessPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
