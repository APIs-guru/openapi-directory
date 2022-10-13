package operations

type PostDeleteInstanceEventWindowActionEnum string

const (
	PostDeleteInstanceEventWindowActionEnumDeleteInstanceEventWindow PostDeleteInstanceEventWindowActionEnum = "DeleteInstanceEventWindow"
)

type PostDeleteInstanceEventWindowVersionEnum string

const (
	PostDeleteInstanceEventWindowVersionEnumTwoThousandAndSixteen1115 PostDeleteInstanceEventWindowVersionEnum = "2016-11-15"
)

type PostDeleteInstanceEventWindowQueryParams struct {
	Action  PostDeleteInstanceEventWindowActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteInstanceEventWindowVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteInstanceEventWindowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteInstanceEventWindowRequest struct {
	QueryParams PostDeleteInstanceEventWindowQueryParams
	Headers     PostDeleteInstanceEventWindowHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteInstanceEventWindowResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
