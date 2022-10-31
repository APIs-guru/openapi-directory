package operations

type PostCreateEnvironmentActionEnum string

const (
	PostCreateEnvironmentActionEnumCreateEnvironment PostCreateEnvironmentActionEnum = "CreateEnvironment"
)

type PostCreateEnvironmentVersionEnum string

const (
	PostCreateEnvironmentVersionEnumTwoThousandAndTen1201 PostCreateEnvironmentVersionEnum = "2010-12-01"
)

type PostCreateEnvironmentQueryParams struct {
	Action  PostCreateEnvironmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateEnvironmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateEnvironmentRequest struct {
	QueryParams PostCreateEnvironmentQueryParams
	Headers     PostCreateEnvironmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateEnvironmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
