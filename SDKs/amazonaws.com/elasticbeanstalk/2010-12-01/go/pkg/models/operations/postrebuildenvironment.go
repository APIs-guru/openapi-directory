package operations

type PostRebuildEnvironmentActionEnum string

const (
	PostRebuildEnvironmentActionEnumRebuildEnvironment PostRebuildEnvironmentActionEnum = "RebuildEnvironment"
)

type PostRebuildEnvironmentVersionEnum string

const (
	PostRebuildEnvironmentVersionEnumTwoThousandAndTen1201 PostRebuildEnvironmentVersionEnum = "2010-12-01"
)

type PostRebuildEnvironmentQueryParams struct {
	Action  PostRebuildEnvironmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRebuildEnvironmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRebuildEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRebuildEnvironmentRequest struct {
	QueryParams PostRebuildEnvironmentQueryParams
	Headers     PostRebuildEnvironmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRebuildEnvironmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
