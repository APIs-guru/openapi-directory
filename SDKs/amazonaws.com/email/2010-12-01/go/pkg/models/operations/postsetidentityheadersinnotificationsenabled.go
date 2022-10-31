package operations

type PostSetIdentityHeadersInNotificationsEnabledActionEnum string

const (
	PostSetIdentityHeadersInNotificationsEnabledActionEnumSetIdentityHeadersInNotificationsEnabled PostSetIdentityHeadersInNotificationsEnabledActionEnum = "SetIdentityHeadersInNotificationsEnabled"
)

type PostSetIdentityHeadersInNotificationsEnabledVersionEnum string

const (
	PostSetIdentityHeadersInNotificationsEnabledVersionEnumTwoThousandAndTen1201 PostSetIdentityHeadersInNotificationsEnabledVersionEnum = "2010-12-01"
)

type PostSetIdentityHeadersInNotificationsEnabledQueryParams struct {
	Action  PostSetIdentityHeadersInNotificationsEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetIdentityHeadersInNotificationsEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetIdentityHeadersInNotificationsEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSetIdentityHeadersInNotificationsEnabledRequest struct {
	QueryParams PostSetIdentityHeadersInNotificationsEnabledQueryParams
	Headers     PostSetIdentityHeadersInNotificationsEnabledHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetIdentityHeadersInNotificationsEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
