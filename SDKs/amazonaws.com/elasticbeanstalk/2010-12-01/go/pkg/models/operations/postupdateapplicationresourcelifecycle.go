package operations

type PostUpdateApplicationResourceLifecycleActionEnum string

const (
	PostUpdateApplicationResourceLifecycleActionEnumUpdateApplicationResourceLifecycle PostUpdateApplicationResourceLifecycleActionEnum = "UpdateApplicationResourceLifecycle"
)

type PostUpdateApplicationResourceLifecycleVersionEnum string

const (
	PostUpdateApplicationResourceLifecycleVersionEnumTwoThousandAndTen1201 PostUpdateApplicationResourceLifecycleVersionEnum = "2010-12-01"
)

type PostUpdateApplicationResourceLifecycleQueryParams struct {
	Action  PostUpdateApplicationResourceLifecycleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateApplicationResourceLifecycleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateApplicationResourceLifecycleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateApplicationResourceLifecycleRequest struct {
	QueryParams PostUpdateApplicationResourceLifecycleQueryParams
	Headers     PostUpdateApplicationResourceLifecycleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateApplicationResourceLifecycleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
