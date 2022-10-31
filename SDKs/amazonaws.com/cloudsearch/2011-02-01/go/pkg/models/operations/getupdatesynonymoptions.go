package operations

type GetUpdateSynonymOptionsActionEnum string

const (
	GetUpdateSynonymOptionsActionEnumUpdateSynonymOptions GetUpdateSynonymOptionsActionEnum = "UpdateSynonymOptions"
)

type GetUpdateSynonymOptionsVersionEnum string

const (
	GetUpdateSynonymOptionsVersionEnumTwoThousandAndEleven0201 GetUpdateSynonymOptionsVersionEnum = "2011-02-01"
)

type GetUpdateSynonymOptionsQueryParams struct {
	Action     GetUpdateSynonymOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                             `queryParam:"style=form,explode=true,name=DomainName"`
	Synonyms   string                             `queryParam:"style=form,explode=true,name=Synonyms"`
	Version    GetUpdateSynonymOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateSynonymOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateSynonymOptionsRequest struct {
	QueryParams GetUpdateSynonymOptionsQueryParams
	Headers     GetUpdateSynonymOptionsHeaders
}

type GetUpdateSynonymOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
