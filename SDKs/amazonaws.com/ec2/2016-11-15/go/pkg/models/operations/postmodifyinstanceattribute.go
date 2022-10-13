package operations

type PostModifyInstanceAttributeActionEnum string

const (
	PostModifyInstanceAttributeActionEnumModifyInstanceAttribute PostModifyInstanceAttributeActionEnum = "ModifyInstanceAttribute"
)

type PostModifyInstanceAttributeVersionEnum string

const (
	PostModifyInstanceAttributeVersionEnumTwoThousandAndSixteen1115 PostModifyInstanceAttributeVersionEnum = "2016-11-15"
)

type PostModifyInstanceAttributeQueryParams struct {
	Action  PostModifyInstanceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyInstanceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyInstanceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyInstanceAttributeRequest struct {
	QueryParams PostModifyInstanceAttributeQueryParams
	Headers     PostModifyInstanceAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyInstanceAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
