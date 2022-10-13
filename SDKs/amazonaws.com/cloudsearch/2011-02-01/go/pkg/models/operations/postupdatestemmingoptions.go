package operations

type PostUpdateStemmingOptionsActionEnum string

const (
	PostUpdateStemmingOptionsActionEnumUpdateStemmingOptions PostUpdateStemmingOptionsActionEnum = "UpdateStemmingOptions"
)

type PostUpdateStemmingOptionsVersionEnum string

const (
	PostUpdateStemmingOptionsVersionEnumTwoThousandAndEleven0201 PostUpdateStemmingOptionsVersionEnum = "2011-02-01"
)

type PostUpdateStemmingOptionsQueryParams struct {
	Action  PostUpdateStemmingOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateStemmingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateStemmingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateStemmingOptionsRequest struct {
	QueryParams PostUpdateStemmingOptionsQueryParams
	Headers     PostUpdateStemmingOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateStemmingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
