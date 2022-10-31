package operations

type PostDetachGroupPolicyActionEnum string

const (
	PostDetachGroupPolicyActionEnumDetachGroupPolicy PostDetachGroupPolicyActionEnum = "DetachGroupPolicy"
)

type PostDetachGroupPolicyVersionEnum string

const (
	PostDetachGroupPolicyVersionEnumTwoThousandAndTen0508 PostDetachGroupPolicyVersionEnum = "2010-05-08"
)

type PostDetachGroupPolicyQueryParams struct {
	Action  PostDetachGroupPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachGroupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDetachGroupPolicyRequest struct {
	QueryParams PostDetachGroupPolicyQueryParams
	Headers     PostDetachGroupPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachGroupPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
