package operations

type PostSetInstanceHealthActionEnum string

const (
	PostSetInstanceHealthActionEnumSetInstanceHealth PostSetInstanceHealthActionEnum = "SetInstanceHealth"
)

type PostSetInstanceHealthVersionEnum string

const (
	PostSetInstanceHealthVersionEnumTwoThousandAndEleven0101 PostSetInstanceHealthVersionEnum = "2011-01-01"
)

type PostSetInstanceHealthQueryParams struct {
	Action  PostSetInstanceHealthActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetInstanceHealthVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetInstanceHealthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSetInstanceHealthRequest struct {
	QueryParams PostSetInstanceHealthQueryParams
	Headers     PostSetInstanceHealthHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetInstanceHealthResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
