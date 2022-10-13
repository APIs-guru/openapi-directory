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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
