package operations

type PostAttachUserPolicyActionEnum string

const (
	PostAttachUserPolicyActionEnumAttachUserPolicy PostAttachUserPolicyActionEnum = "AttachUserPolicy"
)

type PostAttachUserPolicyVersionEnum string

const (
	PostAttachUserPolicyVersionEnumTwoThousandAndTen0508 PostAttachUserPolicyVersionEnum = "2010-05-08"
)

type PostAttachUserPolicyQueryParams struct {
	Action  PostAttachUserPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachUserPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAttachUserPolicyRequest struct {
	QueryParams PostAttachUserPolicyQueryParams
	Headers     PostAttachUserPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachUserPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
