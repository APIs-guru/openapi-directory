package operations

type PostGetIdentityPoliciesActionEnum string

const (
	PostGetIdentityPoliciesActionEnumGetIdentityPolicies PostGetIdentityPoliciesActionEnum = "GetIdentityPolicies"
)

type PostGetIdentityPoliciesVersionEnum string

const (
	PostGetIdentityPoliciesVersionEnumTwoThousandAndTen1201 PostGetIdentityPoliciesVersionEnum = "2010-12-01"
)

type PostGetIdentityPoliciesQueryParams struct {
	Action  PostGetIdentityPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetIdentityPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetIdentityPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetIdentityPoliciesRequest struct {
	QueryParams PostGetIdentityPoliciesQueryParams
	Headers     PostGetIdentityPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetIdentityPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
