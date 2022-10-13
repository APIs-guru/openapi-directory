package operations

type GetDeleteApplicationVersionActionEnum string

const (
	GetDeleteApplicationVersionActionEnumDeleteApplicationVersion GetDeleteApplicationVersionActionEnum = "DeleteApplicationVersion"
)

type GetDeleteApplicationVersionVersionEnum string

const (
	GetDeleteApplicationVersionVersionEnumTwoThousandAndTen1201 GetDeleteApplicationVersionVersionEnum = "2010-12-01"
)

type GetDeleteApplicationVersionQueryParams struct {
	Action             GetDeleteApplicationVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplicationName    string                                 `queryParam:"style=form,explode=true,name=ApplicationName"`
	DeleteSourceBundle *bool                                  `queryParam:"style=form,explode=true,name=DeleteSourceBundle"`
	Version            GetDeleteApplicationVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VersionLabel       string                                 `queryParam:"style=form,explode=true,name=VersionLabel"`
}

type GetDeleteApplicationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteApplicationVersionRequest struct {
	QueryParams GetDeleteApplicationVersionQueryParams
	Headers     GetDeleteApplicationVersionHeaders
}

type GetDeleteApplicationVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
