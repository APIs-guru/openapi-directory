package operations

type PostConfigureHealthCheckActionEnum string

const (
	PostConfigureHealthCheckActionEnumConfigureHealthCheck PostConfigureHealthCheckActionEnum = "ConfigureHealthCheck"
)

type PostConfigureHealthCheckVersionEnum string

const (
	PostConfigureHealthCheckVersionEnumTwoThousandAndTwelve0601 PostConfigureHealthCheckVersionEnum = "2012-06-01"
)

type PostConfigureHealthCheckQueryParams struct {
	Action  PostConfigureHealthCheckActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostConfigureHealthCheckVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostConfigureHealthCheckHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostConfigureHealthCheckRequest struct {
	QueryParams PostConfigureHealthCheckQueryParams
	Headers     PostConfigureHealthCheckHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostConfigureHealthCheckResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
