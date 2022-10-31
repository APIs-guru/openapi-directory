package operations

type PostPutRolePolicyActionEnum string

const (
	PostPutRolePolicyActionEnumPutRolePolicy PostPutRolePolicyActionEnum = "PutRolePolicy"
)

type PostPutRolePolicyVersionEnum string

const (
	PostPutRolePolicyVersionEnumTwoThousandAndTen0508 PostPutRolePolicyVersionEnum = "2010-05-08"
)

type PostPutRolePolicyQueryParams struct {
	Action  PostPutRolePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutRolePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutRolePolicyRequest struct {
	QueryParams PostPutRolePolicyQueryParams
	Headers     PostPutRolePolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutRolePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
