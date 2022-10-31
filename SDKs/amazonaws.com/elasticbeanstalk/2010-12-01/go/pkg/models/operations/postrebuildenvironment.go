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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
