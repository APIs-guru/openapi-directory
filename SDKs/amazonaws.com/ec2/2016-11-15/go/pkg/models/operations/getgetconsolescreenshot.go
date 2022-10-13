package operations

type GetGetConsoleScreenshotActionEnum string

const (
	GetGetConsoleScreenshotActionEnumGetConsoleScreenshot GetGetConsoleScreenshotActionEnum = "GetConsoleScreenshot"
)

type GetGetConsoleScreenshotVersionEnum string

const (
	GetGetConsoleScreenshotVersionEnumTwoThousandAndSixteen1115 GetGetConsoleScreenshotVersionEnum = "2016-11-15"
)

type GetGetConsoleScreenshotQueryParams struct {
	Action     GetGetConsoleScreenshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                             `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetGetConsoleScreenshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	WakeUp     *bool                              `queryParam:"style=form,explode=true,name=WakeUp"`
}

type GetGetConsoleScreenshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetConsoleScreenshotRequest struct {
	QueryParams GetGetConsoleScreenshotQueryParams
	Headers     GetGetConsoleScreenshotHeaders
}

type GetGetConsoleScreenshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
