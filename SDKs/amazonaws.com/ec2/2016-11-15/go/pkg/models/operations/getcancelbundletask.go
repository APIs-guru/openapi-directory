package operations

type GetCancelBundleTaskActionEnum string

const (
	GetCancelBundleTaskActionEnumCancelBundleTask GetCancelBundleTaskActionEnum = "CancelBundleTask"
)

type GetCancelBundleTaskVersionEnum string

const (
	GetCancelBundleTaskVersionEnumTwoThousandAndSixteen1115 GetCancelBundleTaskVersionEnum = "2016-11-15"
)

type GetCancelBundleTaskQueryParams struct {
	Action   GetCancelBundleTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	BundleID string                         `queryParam:"style=form,explode=true,name=BundleId"`
	DryRun   *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	Version  GetCancelBundleTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelBundleTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCancelBundleTaskRequest struct {
	QueryParams GetCancelBundleTaskQueryParams
	Headers     GetCancelBundleTaskHeaders
}

type GetCancelBundleTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
