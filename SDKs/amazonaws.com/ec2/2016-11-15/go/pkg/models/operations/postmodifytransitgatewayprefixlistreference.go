package operations

type PostModifyTransitGatewayPrefixListReferenceActionEnum string

const (
	PostModifyTransitGatewayPrefixListReferenceActionEnumModifyTransitGatewayPrefixListReference PostModifyTransitGatewayPrefixListReferenceActionEnum = "ModifyTransitGatewayPrefixListReference"
)

type PostModifyTransitGatewayPrefixListReferenceVersionEnum string

const (
	PostModifyTransitGatewayPrefixListReferenceVersionEnumTwoThousandAndSixteen1115 PostModifyTransitGatewayPrefixListReferenceVersionEnum = "2016-11-15"
)

type PostModifyTransitGatewayPrefixListReferenceQueryParams struct {
	Action  PostModifyTransitGatewayPrefixListReferenceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyTransitGatewayPrefixListReferenceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyTransitGatewayPrefixListReferenceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyTransitGatewayPrefixListReferenceRequest struct {
	QueryParams PostModifyTransitGatewayPrefixListReferenceQueryParams
	Headers     PostModifyTransitGatewayPrefixListReferenceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyTransitGatewayPrefixListReferenceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
