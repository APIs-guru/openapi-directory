package operations

type PostDeleteIdentityPolicyActionEnum string

const (
	PostDeleteIdentityPolicyActionEnumDeleteIdentityPolicy PostDeleteIdentityPolicyActionEnum = "DeleteIdentityPolicy"
)

type PostDeleteIdentityPolicyVersionEnum string

const (
	PostDeleteIdentityPolicyVersionEnumTwoThousandAndTen1201 PostDeleteIdentityPolicyVersionEnum = "2010-12-01"
)

type PostDeleteIdentityPolicyQueryParams struct {
	Action  PostDeleteIdentityPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteIdentityPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteIdentityPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteIdentityPolicyRequest struct {
	QueryParams PostDeleteIdentityPolicyQueryParams
	Headers     PostDeleteIdentityPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteIdentityPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
