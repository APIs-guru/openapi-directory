package operations

type PostResetInstanceAttributeActionEnum string

const (
	PostResetInstanceAttributeActionEnumResetInstanceAttribute PostResetInstanceAttributeActionEnum = "ResetInstanceAttribute"
)

type PostResetInstanceAttributeVersionEnum string

const (
	PostResetInstanceAttributeVersionEnumTwoThousandAndSixteen1115 PostResetInstanceAttributeVersionEnum = "2016-11-15"
)

type PostResetInstanceAttributeQueryParams struct {
	Action  PostResetInstanceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetInstanceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetInstanceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetInstanceAttributeRequest struct {
	QueryParams PostResetInstanceAttributeQueryParams
	Headers     PostResetInstanceAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetInstanceAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
