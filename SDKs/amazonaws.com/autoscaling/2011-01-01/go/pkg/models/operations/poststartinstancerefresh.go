package operations

type PostStartInstanceRefreshActionEnum string

const (
	PostStartInstanceRefreshActionEnumStartInstanceRefresh PostStartInstanceRefreshActionEnum = "StartInstanceRefresh"
)

type PostStartInstanceRefreshVersionEnum string

const (
	PostStartInstanceRefreshVersionEnumTwoThousandAndEleven0101 PostStartInstanceRefreshVersionEnum = "2011-01-01"
)

type PostStartInstanceRefreshQueryParams struct {
	Action  PostStartInstanceRefreshActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartInstanceRefreshVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartInstanceRefreshHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostStartInstanceRefreshRequest struct {
	QueryParams PostStartInstanceRefreshQueryParams
	Headers     PostStartInstanceRefreshHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartInstanceRefreshResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
