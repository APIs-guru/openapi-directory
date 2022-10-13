package operations

type PostGetConsoleScreenshotActionEnum string

const (
	PostGetConsoleScreenshotActionEnumGetConsoleScreenshot PostGetConsoleScreenshotActionEnum = "GetConsoleScreenshot"
)

type PostGetConsoleScreenshotVersionEnum string

const (
	PostGetConsoleScreenshotVersionEnumTwoThousandAndSixteen1115 PostGetConsoleScreenshotVersionEnum = "2016-11-15"
)

type PostGetConsoleScreenshotQueryParams struct {
	Action  PostGetConsoleScreenshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetConsoleScreenshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetConsoleScreenshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetConsoleScreenshotRequest struct {
	QueryParams PostGetConsoleScreenshotQueryParams
	Headers     PostGetConsoleScreenshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetConsoleScreenshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
