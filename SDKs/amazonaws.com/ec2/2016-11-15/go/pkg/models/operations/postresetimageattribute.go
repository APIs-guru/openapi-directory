package operations

type PostResetImageAttributeActionEnum string

const (
	PostResetImageAttributeActionEnumResetImageAttribute PostResetImageAttributeActionEnum = "ResetImageAttribute"
)

type PostResetImageAttributeVersionEnum string

const (
	PostResetImageAttributeVersionEnumTwoThousandAndSixteen1115 PostResetImageAttributeVersionEnum = "2016-11-15"
)

type PostResetImageAttributeQueryParams struct {
	Action  PostResetImageAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetImageAttributeRequest struct {
	QueryParams PostResetImageAttributeQueryParams
	Headers     PostResetImageAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetImageAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
