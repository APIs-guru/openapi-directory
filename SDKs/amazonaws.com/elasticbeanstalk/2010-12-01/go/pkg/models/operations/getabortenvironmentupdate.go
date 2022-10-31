package operations

type GetAbortEnvironmentUpdateActionEnum string

const (
	GetAbortEnvironmentUpdateActionEnumAbortEnvironmentUpdate GetAbortEnvironmentUpdateActionEnum = "AbortEnvironmentUpdate"
)

type GetAbortEnvironmentUpdateVersionEnum string

const (
	GetAbortEnvironmentUpdateVersionEnumTwoThousandAndTen1201 GetAbortEnvironmentUpdateVersionEnum = "2010-12-01"
)

type GetAbortEnvironmentUpdateQueryParams struct {
	Action          GetAbortEnvironmentUpdateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EnvironmentID   *string                              `queryParam:"style=form,explode=true,name=EnvironmentId"`
	EnvironmentName *string                              `queryParam:"style=form,explode=true,name=EnvironmentName"`
	Version         GetAbortEnvironmentUpdateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAbortEnvironmentUpdateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAbortEnvironmentUpdateRequest struct {
	QueryParams GetAbortEnvironmentUpdateQueryParams
	Headers     GetAbortEnvironmentUpdateHeaders
}

type GetAbortEnvironmentUpdateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
