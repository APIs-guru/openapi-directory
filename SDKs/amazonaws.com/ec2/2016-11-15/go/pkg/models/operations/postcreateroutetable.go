package operations

type PostCreateRouteTableActionEnum string

const (
	PostCreateRouteTableActionEnumCreateRouteTable PostCreateRouteTableActionEnum = "CreateRouteTable"
)

type PostCreateRouteTableVersionEnum string

const (
	PostCreateRouteTableVersionEnumTwoThousandAndSixteen1115 PostCreateRouteTableVersionEnum = "2016-11-15"
)

type PostCreateRouteTableQueryParams struct {
	Action  PostCreateRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateRouteTableRequest struct {
	QueryParams PostCreateRouteTableQueryParams
	Headers     PostCreateRouteTableHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
