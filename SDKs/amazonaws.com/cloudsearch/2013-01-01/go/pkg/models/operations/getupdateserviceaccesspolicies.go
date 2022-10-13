package operations

type GetUpdateServiceAccessPoliciesActionEnum string

const (
	GetUpdateServiceAccessPoliciesActionEnumUpdateServiceAccessPolicies GetUpdateServiceAccessPoliciesActionEnum = "UpdateServiceAccessPolicies"
)

type GetUpdateServiceAccessPoliciesVersionEnum string

const (
	GetUpdateServiceAccessPoliciesVersionEnumTwoThousandAndThirteen0101 GetUpdateServiceAccessPoliciesVersionEnum = "2013-01-01"
)

type GetUpdateServiceAccessPoliciesQueryParams struct {
	AccessPolicies string                                    `queryParam:"style=form,explode=true,name=AccessPolicies"`
	Action         GetUpdateServiceAccessPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName     string                                    `queryParam:"style=form,explode=true,name=DomainName"`
	Version        GetUpdateServiceAccessPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateServiceAccessPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateServiceAccessPoliciesRequest struct {
	QueryParams GetUpdateServiceAccessPoliciesQueryParams
	Headers     GetUpdateServiceAccessPoliciesHeaders
}

type GetUpdateServiceAccessPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
