package operations

type PostReplaceRouteActionEnum string

const (
	PostReplaceRouteActionEnumReplaceRoute PostReplaceRouteActionEnum = "ReplaceRoute"
)

type PostReplaceRouteVersionEnum string

const (
	PostReplaceRouteVersionEnumTwoThousandAndSixteen1115 PostReplaceRouteVersionEnum = "2016-11-15"
)

type PostReplaceRouteQueryParams struct {
	Action  PostReplaceRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReplaceRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReplaceRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReplaceRouteRequest struct {
	QueryParams PostReplaceRouteQueryParams
	Headers     PostReplaceRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReplaceRouteResponse struct {
	ContentType string
	StatusCode  int64
}
