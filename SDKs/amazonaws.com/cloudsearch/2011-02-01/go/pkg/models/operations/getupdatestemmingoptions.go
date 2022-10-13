package operations

type GetUpdateStemmingOptionsActionEnum string

const (
	GetUpdateStemmingOptionsActionEnumUpdateStemmingOptions GetUpdateStemmingOptionsActionEnum = "UpdateStemmingOptions"
)

type GetUpdateStemmingOptionsVersionEnum string

const (
	GetUpdateStemmingOptionsVersionEnumTwoThousandAndEleven0201 GetUpdateStemmingOptionsVersionEnum = "2011-02-01"
)

type GetUpdateStemmingOptionsQueryParams struct {
	Action     GetUpdateStemmingOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                              `queryParam:"style=form,explode=true,name=DomainName"`
	Stems      string                              `queryParam:"style=form,explode=true,name=Stems"`
	Version    GetUpdateStemmingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateStemmingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateStemmingOptionsRequest struct {
	QueryParams GetUpdateStemmingOptionsQueryParams
	Headers     GetUpdateStemmingOptionsHeaders
}

type GetUpdateStemmingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
