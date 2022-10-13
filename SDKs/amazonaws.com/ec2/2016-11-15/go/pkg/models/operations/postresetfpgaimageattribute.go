package operations

type PostResetFpgaImageAttributeActionEnum string

const (
	PostResetFpgaImageAttributeActionEnumResetFpgaImageAttribute PostResetFpgaImageAttributeActionEnum = "ResetFpgaImageAttribute"
)

type PostResetFpgaImageAttributeVersionEnum string

const (
	PostResetFpgaImageAttributeVersionEnumTwoThousandAndSixteen1115 PostResetFpgaImageAttributeVersionEnum = "2016-11-15"
)

type PostResetFpgaImageAttributeQueryParams struct {
	Action  PostResetFpgaImageAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetFpgaImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetFpgaImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetFpgaImageAttributeRequest struct {
	QueryParams PostResetFpgaImageAttributeQueryParams
	Headers     PostResetFpgaImageAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetFpgaImageAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
