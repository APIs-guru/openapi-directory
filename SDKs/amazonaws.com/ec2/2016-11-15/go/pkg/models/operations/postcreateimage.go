package operations

type PostCreateImageActionEnum string

const (
	PostCreateImageActionEnumCreateImage PostCreateImageActionEnum = "CreateImage"
)

type PostCreateImageVersionEnum string

const (
	PostCreateImageVersionEnumTwoThousandAndSixteen1115 PostCreateImageVersionEnum = "2016-11-15"
)

type PostCreateImageQueryParams struct {
	Action  PostCreateImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateImageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateImageRequest struct {
	QueryParams PostCreateImageQueryParams
	Headers     PostCreateImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
