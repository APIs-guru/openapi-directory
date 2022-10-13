package operations

type PostAbortEnvironmentUpdateActionEnum string

const (
	PostAbortEnvironmentUpdateActionEnumAbortEnvironmentUpdate PostAbortEnvironmentUpdateActionEnum = "AbortEnvironmentUpdate"
)

type PostAbortEnvironmentUpdateVersionEnum string

const (
	PostAbortEnvironmentUpdateVersionEnumTwoThousandAndTen1201 PostAbortEnvironmentUpdateVersionEnum = "2010-12-01"
)

type PostAbortEnvironmentUpdateQueryParams struct {
	Action  PostAbortEnvironmentUpdateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAbortEnvironmentUpdateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAbortEnvironmentUpdateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAbortEnvironmentUpdateRequest struct {
	QueryParams PostAbortEnvironmentUpdateQueryParams
	Headers     PostAbortEnvironmentUpdateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAbortEnvironmentUpdateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
