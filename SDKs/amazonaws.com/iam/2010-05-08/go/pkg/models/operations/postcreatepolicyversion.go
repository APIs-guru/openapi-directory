package operations

type PostCreatePolicyVersionActionEnum string

const (
	PostCreatePolicyVersionActionEnumCreatePolicyVersion PostCreatePolicyVersionActionEnum = "CreatePolicyVersion"
)

type PostCreatePolicyVersionVersionEnum string

const (
	PostCreatePolicyVersionVersionEnumTwoThousandAndTen0508 PostCreatePolicyVersionVersionEnum = "2010-05-08"
)

type PostCreatePolicyVersionQueryParams struct {
	Action  PostCreatePolicyVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreatePolicyVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreatePolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreatePolicyVersionRequest struct {
	QueryParams PostCreatePolicyVersionQueryParams
	Headers     PostCreatePolicyVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreatePolicyVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
