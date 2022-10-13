package operations

type GetUpdateApplicationVersionActionEnum string

const (
	GetUpdateApplicationVersionActionEnumUpdateApplicationVersion GetUpdateApplicationVersionActionEnum = "UpdateApplicationVersion"
)

type GetUpdateApplicationVersionVersionEnum string

const (
	GetUpdateApplicationVersionVersionEnumTwoThousandAndTen1201 GetUpdateApplicationVersionVersionEnum = "2010-12-01"
)

type GetUpdateApplicationVersionQueryParams struct {
	Action          GetUpdateApplicationVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplicationName string                                 `queryParam:"style=form,explode=true,name=ApplicationName"`
	Description     *string                                `queryParam:"style=form,explode=true,name=Description"`
	Version         GetUpdateApplicationVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VersionLabel    string                                 `queryParam:"style=form,explode=true,name=VersionLabel"`
}

type GetUpdateApplicationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateApplicationVersionRequest struct {
	QueryParams GetUpdateApplicationVersionQueryParams
	Headers     GetUpdateApplicationVersionHeaders
}

type GetUpdateApplicationVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
