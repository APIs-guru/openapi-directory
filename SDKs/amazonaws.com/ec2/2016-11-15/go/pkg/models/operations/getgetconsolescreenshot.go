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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
