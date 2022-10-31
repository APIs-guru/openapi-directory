package operations

type PostDeleteUserPolicyActionEnum string

const (
	PostDeleteUserPolicyActionEnumDeleteUserPolicy PostDeleteUserPolicyActionEnum = "DeleteUserPolicy"
)

type PostDeleteUserPolicyVersionEnum string

const (
	PostDeleteUserPolicyVersionEnumTwoThousandAndTen0508 PostDeleteUserPolicyVersionEnum = "2010-05-08"
)

type PostDeleteUserPolicyQueryParams struct {
	Action  PostDeleteUserPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteUserPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteUserPolicyRequest struct {
	QueryParams PostDeleteUserPolicyQueryParams
	Headers     PostDeleteUserPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteUserPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
