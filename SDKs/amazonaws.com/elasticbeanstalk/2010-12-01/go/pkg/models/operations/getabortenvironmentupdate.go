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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
