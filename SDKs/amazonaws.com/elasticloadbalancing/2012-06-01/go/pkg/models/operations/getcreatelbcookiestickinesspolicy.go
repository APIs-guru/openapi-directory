package operations

type GetCreateLbCookieStickinessPolicyActionEnum string

const (
	GetCreateLbCookieStickinessPolicyActionEnumCreateLbCookieStickinessPolicy GetCreateLbCookieStickinessPolicyActionEnum = "CreateLBCookieStickinessPolicy"
)

type GetCreateLbCookieStickinessPolicyVersionEnum string

const (
	GetCreateLbCookieStickinessPolicyVersionEnumTwoThousandAndTwelve0601 GetCreateLbCookieStickinessPolicyVersionEnum = "2012-06-01"
)

type GetCreateLbCookieStickinessPolicyQueryParams struct {
	Action                 GetCreateLbCookieStickinessPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CookieExpirationPeriod *int64                                       `queryParam:"style=form,explode=true,name=CookieExpirationPeriod"`
	LoadBalancerName       string                                       `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	PolicyName             string                                       `queryParam:"style=form,explode=true,name=PolicyName"`
	Version                GetCreateLbCookieStickinessPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateLbCookieStickinessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateLbCookieStickinessPolicyRequest struct {
	QueryParams GetCreateLbCookieStickinessPolicyQueryParams
	Headers     GetCreateLbCookieStickinessPolicyHeaders
}

type GetCreateLbCookieStickinessPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
