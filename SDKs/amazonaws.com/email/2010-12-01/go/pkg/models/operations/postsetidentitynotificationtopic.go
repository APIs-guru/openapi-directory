package operations

type PostSetIdentityNotificationTopicActionEnum string

const (
	PostSetIdentityNotificationTopicActionEnumSetIdentityNotificationTopic PostSetIdentityNotificationTopicActionEnum = "SetIdentityNotificationTopic"
)

type PostSetIdentityNotificationTopicVersionEnum string

const (
	PostSetIdentityNotificationTopicVersionEnumTwoThousandAndTen1201 PostSetIdentityNotificationTopicVersionEnum = "2010-12-01"
)

type PostSetIdentityNotificationTopicQueryParams struct {
	Action  PostSetIdentityNotificationTopicActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetIdentityNotificationTopicVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetIdentityNotificationTopicHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSetIdentityNotificationTopicRequest struct {
	QueryParams PostSetIdentityNotificationTopicQueryParams
	Headers     PostSetIdentityNotificationTopicHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetIdentityNotificationTopicResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
