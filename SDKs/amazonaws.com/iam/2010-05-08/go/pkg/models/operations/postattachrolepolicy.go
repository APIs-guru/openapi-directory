package operations

type PostAttachRolePolicyActionEnum string

const (
	PostAttachRolePolicyActionEnumAttachRolePolicy PostAttachRolePolicyActionEnum = "AttachRolePolicy"
)

type PostAttachRolePolicyVersionEnum string

const (
	PostAttachRolePolicyVersionEnumTwoThousandAndTen0508 PostAttachRolePolicyVersionEnum = "2010-05-08"
)

type PostAttachRolePolicyQueryParams struct {
	Action  PostAttachRolePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachRolePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAttachRolePolicyRequest struct {
	QueryParams PostAttachRolePolicyQueryParams
	Headers     PostAttachRolePolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachRolePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
