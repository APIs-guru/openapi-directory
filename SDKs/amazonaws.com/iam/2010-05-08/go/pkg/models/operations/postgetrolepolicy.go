package operations

type PostGetRolePolicyActionEnum string

const (
	PostGetRolePolicyActionEnumGetRolePolicy PostGetRolePolicyActionEnum = "GetRolePolicy"
)

type PostGetRolePolicyVersionEnum string

const (
	PostGetRolePolicyVersionEnumTwoThousandAndTen0508 PostGetRolePolicyVersionEnum = "2010-05-08"
)

type PostGetRolePolicyQueryParams struct {
	Action  PostGetRolePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetRolePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetRolePolicyRequest struct {
	QueryParams PostGetRolePolicyQueryParams
	Headers     PostGetRolePolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetRolePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
