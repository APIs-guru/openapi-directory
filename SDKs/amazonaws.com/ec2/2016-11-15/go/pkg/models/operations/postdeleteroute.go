package operations

type PostDeleteRouteActionEnum string

const (
	PostDeleteRouteActionEnumDeleteRoute PostDeleteRouteActionEnum = "DeleteRoute"
)

type PostDeleteRouteVersionEnum string

const (
	PostDeleteRouteVersionEnumTwoThousandAndSixteen1115 PostDeleteRouteVersionEnum = "2016-11-15"
)

type PostDeleteRouteQueryParams struct {
	Action  PostDeleteRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteRouteRequest struct {
	QueryParams PostDeleteRouteQueryParams
	Headers     PostDeleteRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteRouteResponse struct {
	ContentType string
	StatusCode  int64
}
