package operations

type GetUpdateServiceAccessPoliciesActionEnum string

const (
	GetUpdateServiceAccessPoliciesActionEnumUpdateServiceAccessPolicies GetUpdateServiceAccessPoliciesActionEnum = "UpdateServiceAccessPolicies"
)

type GetUpdateServiceAccessPoliciesVersionEnum string

const (
	GetUpdateServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201 GetUpdateServiceAccessPoliciesVersionEnum = "2011-02-01"
)

type GetUpdateServiceAccessPoliciesQueryParams struct {
	AccessPolicies string                                    `queryParam:"style=form,explode=true,name=AccessPolicies"`
	Action         GetUpdateServiceAccessPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName     string                                    `queryParam:"style=form,explode=true,name=DomainName"`
	Version        GetUpdateServiceAccessPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateServiceAccessPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
