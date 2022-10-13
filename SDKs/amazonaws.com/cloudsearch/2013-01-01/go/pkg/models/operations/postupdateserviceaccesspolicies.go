package operations

type PostUpdateServiceAccessPoliciesActionEnum string

const (
	PostUpdateServiceAccessPoliciesActionEnumUpdateServiceAccessPolicies PostUpdateServiceAccessPoliciesActionEnum = "UpdateServiceAccessPolicies"
)

type PostUpdateServiceAccessPoliciesVersionEnum string

const (
	PostUpdateServiceAccessPoliciesVersionEnumTwoThousandAndThirteen0101 PostUpdateServiceAccessPoliciesVersionEnum = "2013-01-01"
)

type PostUpdateServiceAccessPoliciesQueryParams struct {
	Action  PostUpdateServiceAccessPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateServiceAccessPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateServiceAccessPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateServiceAccessPoliciesRequest struct {
	QueryParams PostUpdateServiceAccessPoliciesQueryParams
	Headers     PostUpdateServiceAccessPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateServiceAccessPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
