package operations

type PostDeleteVpcPeeringConnectionActionEnum string

const (
	PostDeleteVpcPeeringConnectionActionEnumDeleteVpcPeeringConnection PostDeleteVpcPeeringConnectionActionEnum = "DeleteVpcPeeringConnection"
)

type PostDeleteVpcPeeringConnectionVersionEnum string

const (
	PostDeleteVpcPeeringConnectionVersionEnumTwoThousandAndSixteen1115 PostDeleteVpcPeeringConnectionVersionEnum = "2016-11-15"
)

type PostDeleteVpcPeeringConnectionQueryParams struct {
	Action  PostDeleteVpcPeeringConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteVpcPeeringConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteVpcPeeringConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteVpcPeeringConnectionRequest struct {
	QueryParams PostDeleteVpcPeeringConnectionQueryParams
	Headers     PostDeleteVpcPeeringConnectionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteVpcPeeringConnectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
