package operations

type PostTerminateEnvironmentActionEnum string

const (
	PostTerminateEnvironmentActionEnumTerminateEnvironment PostTerminateEnvironmentActionEnum = "TerminateEnvironment"
)

type PostTerminateEnvironmentVersionEnum string

const (
	PostTerminateEnvironmentVersionEnumTwoThousandAndTen1201 PostTerminateEnvironmentVersionEnum = "2010-12-01"
)

type PostTerminateEnvironmentQueryParams struct {
	Action  PostTerminateEnvironmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTerminateEnvironmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTerminateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostTerminateEnvironmentRequest struct {
	QueryParams PostTerminateEnvironmentQueryParams
	Headers     PostTerminateEnvironmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTerminateEnvironmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
