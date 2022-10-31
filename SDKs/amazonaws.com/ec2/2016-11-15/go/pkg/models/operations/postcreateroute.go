package operations

type PostCreateRouteActionEnum string

const (
	PostCreateRouteActionEnumCreateRoute PostCreateRouteActionEnum = "CreateRoute"
)

type PostCreateRouteVersionEnum string

const (
	PostCreateRouteVersionEnumTwoThousandAndSixteen1115 PostCreateRouteVersionEnum = "2016-11-15"
)

type PostCreateRouteQueryParams struct {
	Action  PostCreateRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateRouteRequest struct {
	QueryParams PostCreateRouteQueryParams
	Headers     PostCreateRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
