package shared




type NotificationReadStatusEnum string

const (
    NotificationReadStatusEnumSucceeded NotificationReadStatusEnum = "succeeded"
NotificationReadStatusEnumFailed NotificationReadStatusEnum = "failed"
)


type NotificationRead struct {
    Message *string `json:"message,omitempty"`
    Status NotificationReadStatusEnum `json:"status"`
    
}

