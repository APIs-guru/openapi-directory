package operations

type PostModifyImageAttributeActionEnum string

const (
	PostModifyImageAttributeActionEnumModifyImageAttribute PostModifyImageAttributeActionEnum = "ModifyImageAttribute"
)

type PostModifyImageAttributeVersionEnum string

const (
	PostModifyImageAttributeVersionEnumTwoThousandAndSixteen1115 PostModifyImageAttributeVersionEnum = "2016-11-15"
)

type PostModifyImageAttributeQueryParams struct {
	Action  PostModifyImageAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyImageAttributeRequest struct {
	QueryParams PostModifyImageAttributeQueryParams
	Headers     PostModifyImageAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyImageAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
