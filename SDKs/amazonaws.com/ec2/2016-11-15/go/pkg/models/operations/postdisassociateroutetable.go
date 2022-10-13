package operations

type PostDisassociateRouteTableActionEnum string

const (
	PostDisassociateRouteTableActionEnumDisassociateRouteTable PostDisassociateRouteTableActionEnum = "DisassociateRouteTable"
)

type PostDisassociateRouteTableVersionEnum string

const (
	PostDisassociateRouteTableVersionEnumTwoThousandAndSixteen1115 PostDisassociateRouteTableVersionEnum = "2016-11-15"
)

type PostDisassociateRouteTableQueryParams struct {
	Action  PostDisassociateRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateRouteTableRequest struct {
	QueryParams PostDisassociateRouteTableQueryParams
	Headers     PostDisassociateRouteTableHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateRouteTableResponse struct {
	ContentType string
	StatusCode  int64
}
