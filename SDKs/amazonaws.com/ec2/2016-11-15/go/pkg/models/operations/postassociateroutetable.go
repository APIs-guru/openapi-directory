package operations

type PostAssociateRouteTableActionEnum string

const (
	PostAssociateRouteTableActionEnumAssociateRouteTable PostAssociateRouteTableActionEnum = "AssociateRouteTable"
)

type PostAssociateRouteTableVersionEnum string

const (
	PostAssociateRouteTableVersionEnumTwoThousandAndSixteen1115 PostAssociateRouteTableVersionEnum = "2016-11-15"
)

type PostAssociateRouteTableQueryParams struct {
	Action  PostAssociateRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAssociateRouteTableRequest struct {
	QueryParams PostAssociateRouteTableQueryParams
	Headers     PostAssociateRouteTableHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
