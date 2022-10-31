package operations

type PostDeleteTransitGatewayPrefixListReferenceActionEnum string

const (
	PostDeleteTransitGatewayPrefixListReferenceActionEnumDeleteTransitGatewayPrefixListReference PostDeleteTransitGatewayPrefixListReferenceActionEnum = "DeleteTransitGatewayPrefixListReference"
)

type PostDeleteTransitGatewayPrefixListReferenceVersionEnum string

const (
	PostDeleteTransitGatewayPrefixListReferenceVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayPrefixListReferenceVersionEnum = "2016-11-15"
)

type PostDeleteTransitGatewayPrefixListReferenceQueryParams struct {
	Action  PostDeleteTransitGatewayPrefixListReferenceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTransitGatewayPrefixListReferenceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTransitGatewayPrefixListReferenceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteTransitGatewayPrefixListReferenceRequest struct {
	QueryParams PostDeleteTransitGatewayPrefixListReferenceQueryParams
	Headers     PostDeleteTransitGatewayPrefixListReferenceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTransitGatewayPrefixListReferenceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
