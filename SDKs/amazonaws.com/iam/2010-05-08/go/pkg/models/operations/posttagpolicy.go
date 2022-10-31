package operations

type PostTagPolicyActionEnum string

const (
	PostTagPolicyActionEnumTagPolicy PostTagPolicyActionEnum = "TagPolicy"
)

type PostTagPolicyVersionEnum string

const (
	PostTagPolicyVersionEnumTwoThousandAndTen0508 PostTagPolicyVersionEnum = "2010-05-08"
)

type PostTagPolicyQueryParams struct {
	Action  PostTagPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTagPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTagPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostTagPolicyRequest struct {
	QueryParams PostTagPolicyQueryParams
	Headers     PostTagPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTagPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
