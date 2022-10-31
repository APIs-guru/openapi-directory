package operations

type PostUpdateEnvironmentActionEnum string

const (
	PostUpdateEnvironmentActionEnumUpdateEnvironment PostUpdateEnvironmentActionEnum = "UpdateEnvironment"
)

type PostUpdateEnvironmentVersionEnum string

const (
	PostUpdateEnvironmentVersionEnumTwoThousandAndTen1201 PostUpdateEnvironmentVersionEnum = "2010-12-01"
)

type PostUpdateEnvironmentQueryParams struct {
	Action  PostUpdateEnvironmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateEnvironmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUpdateEnvironmentRequest struct {
	QueryParams PostUpdateEnvironmentQueryParams
	Headers     PostUpdateEnvironmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateEnvironmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
