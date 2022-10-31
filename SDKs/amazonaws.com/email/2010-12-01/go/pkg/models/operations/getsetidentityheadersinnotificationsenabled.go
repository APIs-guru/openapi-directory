package operations




type GetSetIdentityHeadersInNotificationsEnabledActionEnum string

const (
    GetSetIdentityHeadersInNotificationsEnabledActionEnumSetIdentityHeadersInNotificationsEnabled GetSetIdentityHeadersInNotificationsEnabledActionEnum = "SetIdentityHeadersInNotificationsEnabled"
)



type GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum string

const (
    GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnumBounce GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum = "Bounce"
GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnumComplaint GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum = "Complaint"
GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnumDelivery GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum = "Delivery"
)



type GetSetIdentityHeadersInNotificationsEnabledVersionEnum string

const (
    GetSetIdentityHeadersInNotificationsEnabledVersionEnumTwoThousandAndTen1201 GetSetIdentityHeadersInNotificationsEnabledVersionEnum = "2010-12-01"
)


type GetSetIdentityHeadersInNotificationsEnabledQueryParams struct {
    Action GetSetIdentityHeadersInNotificationsEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Enabled bool `queryParam:"style=form,explode=true,name=Enabled"`
    Identity string `queryParam:"style=form,explode=true,name=Identity"`
    NotificationType GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum `queryParam:"style=form,explode=true,name=NotificationType"`
    Version GetSetIdentityHeadersInNotificationsEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetSetIdentityHeadersInNotificationsEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSetIdentityHeadersInNotificationsEnabledRequest struct {
    QueryParams GetSetIdentityHeadersInNotificationsEnabledQueryParams 
    Headers GetSetIdentityHeadersInNotificationsEnabledHeaders 
    
}

type GetSetIdentityHeadersInNotificationsEnabledResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

