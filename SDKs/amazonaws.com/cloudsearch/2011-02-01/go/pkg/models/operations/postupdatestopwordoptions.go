package operations

type PostUpdateStopwordOptionsActionEnum string

const (
	PostUpdateStopwordOptionsActionEnumUpdateStopwordOptions PostUpdateStopwordOptionsActionEnum = "UpdateStopwordOptions"
)

type PostUpdateStopwordOptionsVersionEnum string

const (
	PostUpdateStopwordOptionsVersionEnumTwoThousandAndEleven0201 PostUpdateStopwordOptionsVersionEnum = "2011-02-01"
)

type PostUpdateStopwordOptionsQueryParams struct {
	Action  PostUpdateStopwordOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateStopwordOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateStopwordOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateStopwordOptionsRequest struct {
	QueryParams PostUpdateStopwordOptionsQueryParams
	Headers     PostUpdateStopwordOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateStopwordOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
