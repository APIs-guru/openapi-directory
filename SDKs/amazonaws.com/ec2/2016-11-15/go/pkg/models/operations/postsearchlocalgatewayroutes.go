package operations

type PostSearchLocalGatewayRoutesActionEnum string

const (
	PostSearchLocalGatewayRoutesActionEnumSearchLocalGatewayRoutes PostSearchLocalGatewayRoutesActionEnum = "SearchLocalGatewayRoutes"
)

type PostSearchLocalGatewayRoutesVersionEnum string

const (
	PostSearchLocalGatewayRoutesVersionEnumTwoThousandAndSixteen1115 PostSearchLocalGatewayRoutesVersionEnum = "2016-11-15"
)

type PostSearchLocalGatewayRoutesQueryParams struct {
	Action     PostSearchLocalGatewayRoutesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                 `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostSearchLocalGatewayRoutesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSearchLocalGatewayRoutesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSearchLocalGatewayRoutesRequest struct {
	QueryParams PostSearchLocalGatewayRoutesQueryParams
	Headers     PostSearchLocalGatewayRoutesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSearchLocalGatewayRoutesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
