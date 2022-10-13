package operations

type PostDescribeSynonymOptionsActionEnum string

const (
	PostDescribeSynonymOptionsActionEnumDescribeSynonymOptions PostDescribeSynonymOptionsActionEnum = "DescribeSynonymOptions"
)

type PostDescribeSynonymOptionsVersionEnum string

const (
	PostDescribeSynonymOptionsVersionEnumTwoThousandAndEleven0201 PostDescribeSynonymOptionsVersionEnum = "2011-02-01"
)

type PostDescribeSynonymOptionsQueryParams struct {
	Action  PostDescribeSynonymOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeSynonymOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSynonymOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSynonymOptionsRequest struct {
	QueryParams PostDescribeSynonymOptionsQueryParams
	Headers     PostDescribeSynonymOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSynonymOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
