package operations

type PostCreateVpcPeeringConnectionActionEnum string

const (
	PostCreateVpcPeeringConnectionActionEnumCreateVpcPeeringConnection PostCreateVpcPeeringConnectionActionEnum = "CreateVpcPeeringConnection"
)

type PostCreateVpcPeeringConnectionVersionEnum string

const (
	PostCreateVpcPeeringConnectionVersionEnumTwoThousandAndSixteen1115 PostCreateVpcPeeringConnectionVersionEnum = "2016-11-15"
)

type PostCreateVpcPeeringConnectionQueryParams struct {
	Action  PostCreateVpcPeeringConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVpcPeeringConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVpcPeeringConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateVpcPeeringConnectionRequest struct {
	QueryParams PostCreateVpcPeeringConnectionQueryParams
	Headers     PostCreateVpcPeeringConnectionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVpcPeeringConnectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
