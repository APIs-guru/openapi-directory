package operations

type PostGetGroupPolicyActionEnum string

const (
	PostGetGroupPolicyActionEnumGetGroupPolicy PostGetGroupPolicyActionEnum = "GetGroupPolicy"
)

type PostGetGroupPolicyVersionEnum string

const (
	PostGetGroupPolicyVersionEnumTwoThousandAndTen0508 PostGetGroupPolicyVersionEnum = "2010-05-08"
)

type PostGetGroupPolicyQueryParams struct {
	Action  PostGetGroupPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetGroupPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetGroupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetGroupPolicyRequest struct {
	QueryParams PostGetGroupPolicyQueryParams
	Headers     PostGetGroupPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetGroupPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
