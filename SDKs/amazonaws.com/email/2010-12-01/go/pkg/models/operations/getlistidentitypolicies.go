package operations

type GetListIdentityPoliciesActionEnum string

const (
	GetListIdentityPoliciesActionEnumListIdentityPolicies GetListIdentityPoliciesActionEnum = "ListIdentityPolicies"
)

type GetListIdentityPoliciesVersionEnum string

const (
	GetListIdentityPoliciesVersionEnumTwoThousandAndTen1201 GetListIdentityPoliciesVersionEnum = "2010-12-01"
)

type GetListIdentityPoliciesQueryParams struct {
	Action   GetListIdentityPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Identity string                             `queryParam:"style=form,explode=true,name=Identity"`
	Version  GetListIdentityPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListIdentityPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListIdentityPoliciesRequest struct {
	QueryParams GetListIdentityPoliciesQueryParams
	Headers     GetListIdentityPoliciesHeaders
}

type GetListIdentityPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
