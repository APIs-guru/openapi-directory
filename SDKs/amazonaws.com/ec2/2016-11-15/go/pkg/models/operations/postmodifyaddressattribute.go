package operations

type PostModifyAddressAttributeActionEnum string

const (
	PostModifyAddressAttributeActionEnumModifyAddressAttribute PostModifyAddressAttributeActionEnum = "ModifyAddressAttribute"
)

type PostModifyAddressAttributeVersionEnum string

const (
	PostModifyAddressAttributeVersionEnumTwoThousandAndSixteen1115 PostModifyAddressAttributeVersionEnum = "2016-11-15"
)

type PostModifyAddressAttributeQueryParams struct {
	Action  PostModifyAddressAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyAddressAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyAddressAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyAddressAttributeRequest struct {
	QueryParams PostModifyAddressAttributeQueryParams
	Headers     PostModifyAddressAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyAddressAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
