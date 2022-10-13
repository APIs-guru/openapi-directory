package operations

type PostRestartAppServerActionEnum string

const (
	PostRestartAppServerActionEnumRestartAppServer PostRestartAppServerActionEnum = "RestartAppServer"
)

type PostRestartAppServerVersionEnum string

const (
	PostRestartAppServerVersionEnumTwoThousandAndTen1201 PostRestartAppServerVersionEnum = "2010-12-01"
)

type PostRestartAppServerQueryParams struct {
	Action  PostRestartAppServerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestartAppServerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestartAppServerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRestartAppServerRequest struct {
	QueryParams PostRestartAppServerQueryParams
	Headers     PostRestartAppServerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRestartAppServerResponse struct {
	ContentType string
	StatusCode  int64
}
