package operations

type PostUpdateSynonymOptionsActionEnum string

const (
	PostUpdateSynonymOptionsActionEnumUpdateSynonymOptions PostUpdateSynonymOptionsActionEnum = "UpdateSynonymOptions"
)

type PostUpdateSynonymOptionsVersionEnum string

const (
	PostUpdateSynonymOptionsVersionEnumTwoThousandAndEleven0201 PostUpdateSynonymOptionsVersionEnum = "2011-02-01"
)

type PostUpdateSynonymOptionsQueryParams struct {
	Action  PostUpdateSynonymOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateSynonymOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateSynonymOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateSynonymOptionsRequest struct {
	QueryParams PostUpdateSynonymOptionsQueryParams
	Headers     PostUpdateSynonymOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateSynonymOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
