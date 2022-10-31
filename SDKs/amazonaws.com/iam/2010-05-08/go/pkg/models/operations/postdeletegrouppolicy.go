package operations

type PostDeleteGroupPolicyActionEnum string

const (
	PostDeleteGroupPolicyActionEnumDeleteGroupPolicy PostDeleteGroupPolicyActionEnum = "DeleteGroupPolicy"
)

type PostDeleteGroupPolicyVersionEnum string

const (
	PostDeleteGroupPolicyVersionEnumTwoThousandAndTen0508 PostDeleteGroupPolicyVersionEnum = "2010-05-08"
)

type PostDeleteGroupPolicyQueryParams struct {
	Action  PostDeleteGroupPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteGroupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteGroupPolicyRequest struct {
	QueryParams PostDeleteGroupPolicyQueryParams
	Headers     PostDeleteGroupPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteGroupPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
