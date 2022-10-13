package operations

type GetUpdateStopwordOptionsActionEnum string

const (
	GetUpdateStopwordOptionsActionEnumUpdateStopwordOptions GetUpdateStopwordOptionsActionEnum = "UpdateStopwordOptions"
)

type GetUpdateStopwordOptionsVersionEnum string

const (
	GetUpdateStopwordOptionsVersionEnumTwoThousandAndEleven0201 GetUpdateStopwordOptionsVersionEnum = "2011-02-01"
)

type GetUpdateStopwordOptionsQueryParams struct {
	Action     GetUpdateStopwordOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                              `queryParam:"style=form,explode=true,name=DomainName"`
	Stopwords  string                              `queryParam:"style=form,explode=true,name=Stopwords"`
	Version    GetUpdateStopwordOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateStopwordOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateStopwordOptionsRequest struct {
	QueryParams GetUpdateStopwordOptionsQueryParams
	Headers     GetUpdateStopwordOptionsHeaders
}

type GetUpdateStopwordOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
