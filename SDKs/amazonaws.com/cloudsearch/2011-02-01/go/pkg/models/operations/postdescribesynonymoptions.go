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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
