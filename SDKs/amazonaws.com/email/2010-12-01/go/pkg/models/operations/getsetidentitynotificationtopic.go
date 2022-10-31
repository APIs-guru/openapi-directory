package operations

type GetSetIdentityNotificationTopicActionEnum string

const (
	GetSetIdentityNotificationTopicActionEnumSetIdentityNotificationTopic GetSetIdentityNotificationTopicActionEnum = "SetIdentityNotificationTopic"
)

type GetSetIdentityNotificationTopicNotificationTypeEnum string

const (
	GetSetIdentityNotificationTopicNotificationTypeEnumBounce    GetSetIdentityNotificationTopicNotificationTypeEnum = "Bounce"
	GetSetIdentityNotificationTopicNotificationTypeEnumComplaint GetSetIdentityNotificationTopicNotificationTypeEnum = "Complaint"
	GetSetIdentityNotificationTopicNotificationTypeEnumDelivery  GetSetIdentityNotificationTopicNotificationTypeEnum = "Delivery"
)

type GetSetIdentityNotificationTopicVersionEnum string

const (
	GetSetIdentityNotificationTopicVersionEnumTwoThousandAndTen1201 GetSetIdentityNotificationTopicVersionEnum = "2010-12-01"
)

type GetSetIdentityNotificationTopicQueryParams struct {
	Action           GetSetIdentityNotificationTopicActionEnum           `queryParam:"style=form,explode=true,name=Action"`
	Identity         string                                              `queryParam:"style=form,explode=true,name=Identity"`
	NotificationType GetSetIdentityNotificationTopicNotificationTypeEnum `queryParam:"style=form,explode=true,name=NotificationType"`
	SnsTopic         *string                                             `queryParam:"style=form,explode=true,name=SnsTopic"`
	Version          GetSetIdentityNotificationTopicVersionEnum          `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetIdentityNotificationTopicHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSetIdentityNotificationTopicRequest struct {
	QueryParams GetSetIdentityNotificationTopicQueryParams
	Headers     GetSetIdentityNotificationTopicHeaders
}

type GetSetIdentityNotificationTopicResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
