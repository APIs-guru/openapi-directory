package operations

type GetDeletePlatformVersionActionEnum string

const (
	GetDeletePlatformVersionActionEnumDeletePlatformVersion GetDeletePlatformVersionActionEnum = "DeletePlatformVersion"
)

type GetDeletePlatformVersionVersionEnum string

const (
	GetDeletePlatformVersionVersionEnumTwoThousandAndTen1201 GetDeletePlatformVersionVersionEnum = "2010-12-01"
)

type GetDeletePlatformVersionQueryParams struct {
	Action      GetDeletePlatformVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PlatformArn *string                             `queryParam:"style=form,explode=true,name=PlatformArn"`
	Version     GetDeletePlatformVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeletePlatformVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeletePlatformVersionRequest struct {
	QueryParams GetDeletePlatformVersionQueryParams
	Headers     GetDeletePlatformVersionHeaders
}

type GetDeletePlatformVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
