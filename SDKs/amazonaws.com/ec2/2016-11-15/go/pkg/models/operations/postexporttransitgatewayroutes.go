package operations

type PostExportTransitGatewayRoutesActionEnum string

const (
	PostExportTransitGatewayRoutesActionEnumExportTransitGatewayRoutes PostExportTransitGatewayRoutesActionEnum = "ExportTransitGatewayRoutes"
)

type PostExportTransitGatewayRoutesVersionEnum string

const (
	PostExportTransitGatewayRoutesVersionEnumTwoThousandAndSixteen1115 PostExportTransitGatewayRoutesVersionEnum = "2016-11-15"
)

type PostExportTransitGatewayRoutesQueryParams struct {
	Action  PostExportTransitGatewayRoutesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostExportTransitGatewayRoutesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostExportTransitGatewayRoutesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostExportTransitGatewayRoutesRequest struct {
	QueryParams PostExportTransitGatewayRoutesQueryParams
	Headers     PostExportTransitGatewayRoutesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostExportTransitGatewayRoutesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
