package operations

type PostDeleteSubnetActionEnum string

const (
	PostDeleteSubnetActionEnumDeleteSubnet PostDeleteSubnetActionEnum = "DeleteSubnet"
)

type PostDeleteSubnetVersionEnum string

const (
	PostDeleteSubnetVersionEnumTwoThousandAndSixteen1115 PostDeleteSubnetVersionEnum = "2016-11-15"
)

type PostDeleteSubnetQueryParams struct {
	Action  PostDeleteSubnetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSubnetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSubnetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteSubnetRequest struct {
	QueryParams PostDeleteSubnetQueryParams
	Headers     PostDeleteSubnetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSubnetResponse struct {
	ContentType string
	StatusCode  int64
}
