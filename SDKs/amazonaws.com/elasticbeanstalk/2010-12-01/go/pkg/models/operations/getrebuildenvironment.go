package operations

type GetRebuildEnvironmentActionEnum string

const (
	GetRebuildEnvironmentActionEnumRebuildEnvironment GetRebuildEnvironmentActionEnum = "RebuildEnvironment"
)

type GetRebuildEnvironmentVersionEnum string

const (
	GetRebuildEnvironmentVersionEnumTwoThousandAndTen1201 GetRebuildEnvironmentVersionEnum = "2010-12-01"
)

type GetRebuildEnvironmentQueryParams struct {
	Action          GetRebuildEnvironmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EnvironmentID   *string                          `queryParam:"style=form,explode=true,name=EnvironmentId"`
	EnvironmentName *string                          `queryParam:"style=form,explode=true,name=EnvironmentName"`
	Version         GetRebuildEnvironmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRebuildEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRebuildEnvironmentRequest struct {
	QueryParams GetRebuildEnvironmentQueryParams
	Headers     GetRebuildEnvironmentHeaders
}

type GetRebuildEnvironmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
