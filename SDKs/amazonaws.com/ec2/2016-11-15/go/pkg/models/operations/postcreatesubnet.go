package operations

type PostCreateSubnetActionEnum string

const (
	PostCreateSubnetActionEnumCreateSubnet PostCreateSubnetActionEnum = "CreateSubnet"
)

type PostCreateSubnetVersionEnum string

const (
	PostCreateSubnetVersionEnumTwoThousandAndSixteen1115 PostCreateSubnetVersionEnum = "2016-11-15"
)

type PostCreateSubnetQueryParams struct {
	Action  PostCreateSubnetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSubnetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSubnetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateSubnetRequest struct {
	QueryParams PostCreateSubnetQueryParams
	Headers     PostCreateSubnetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSubnetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
