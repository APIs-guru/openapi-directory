package operations

type PostModifyFpgaImageAttributeActionEnum string

const (
	PostModifyFpgaImageAttributeActionEnumModifyFpgaImageAttribute PostModifyFpgaImageAttributeActionEnum = "ModifyFpgaImageAttribute"
)

type PostModifyFpgaImageAttributeVersionEnum string

const (
	PostModifyFpgaImageAttributeVersionEnumTwoThousandAndSixteen1115 PostModifyFpgaImageAttributeVersionEnum = "2016-11-15"
)

type PostModifyFpgaImageAttributeQueryParams struct {
	Action  PostModifyFpgaImageAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyFpgaImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyFpgaImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyFpgaImageAttributeRequest struct {
	QueryParams PostModifyFpgaImageAttributeQueryParams
	Headers     PostModifyFpgaImageAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyFpgaImageAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
