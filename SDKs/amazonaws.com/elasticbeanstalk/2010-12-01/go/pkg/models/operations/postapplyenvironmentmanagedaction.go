package operations

type PostApplyEnvironmentManagedActionActionEnum string

const (
	PostApplyEnvironmentManagedActionActionEnumApplyEnvironmentManagedAction PostApplyEnvironmentManagedActionActionEnum = "ApplyEnvironmentManagedAction"
)

type PostApplyEnvironmentManagedActionVersionEnum string

const (
	PostApplyEnvironmentManagedActionVersionEnumTwoThousandAndTen1201 PostApplyEnvironmentManagedActionVersionEnum = "2010-12-01"
)

type PostApplyEnvironmentManagedActionQueryParams struct {
	Action  PostApplyEnvironmentManagedActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostApplyEnvironmentManagedActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostApplyEnvironmentManagedActionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostApplyEnvironmentManagedActionRequest struct {
	QueryParams PostApplyEnvironmentManagedActionQueryParams
	Headers     PostApplyEnvironmentManagedActionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostApplyEnvironmentManagedActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
