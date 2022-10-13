package operations

type PostModifyIDFormatActionEnum string

const (
	PostModifyIDFormatActionEnumModifyIDFormat PostModifyIDFormatActionEnum = "ModifyIdFormat"
)

type PostModifyIDFormatVersionEnum string

const (
	PostModifyIDFormatVersionEnumTwoThousandAndSixteen1115 PostModifyIDFormatVersionEnum = "2016-11-15"
)

type PostModifyIDFormatQueryParams struct {
	Action  PostModifyIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyIDFormatRequest struct {
	QueryParams PostModifyIDFormatQueryParams
	Headers     PostModifyIDFormatHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyIDFormatResponse struct {
	ContentType string
	StatusCode  int64
}
