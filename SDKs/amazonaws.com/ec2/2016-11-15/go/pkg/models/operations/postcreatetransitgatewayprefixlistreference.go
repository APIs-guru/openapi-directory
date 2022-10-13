package operations

type PostCreateTransitGatewayPrefixListReferenceActionEnum string

const (
	PostCreateTransitGatewayPrefixListReferenceActionEnumCreateTransitGatewayPrefixListReference PostCreateTransitGatewayPrefixListReferenceActionEnum = "CreateTransitGatewayPrefixListReference"
)

type PostCreateTransitGatewayPrefixListReferenceVersionEnum string

const (
	PostCreateTransitGatewayPrefixListReferenceVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayPrefixListReferenceVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayPrefixListReferenceQueryParams struct {
	Action  PostCreateTransitGatewayPrefixListReferenceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayPrefixListReferenceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayPrefixListReferenceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayPrefixListReferenceRequest struct {
	QueryParams PostCreateTransitGatewayPrefixListReferenceQueryParams
	Headers     PostCreateTransitGatewayPrefixListReferenceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayPrefixListReferenceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
