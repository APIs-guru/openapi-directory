package shared

type EventTypeEnum string

const (
	EventTypeEnumSend             EventTypeEnum = "send"
	EventTypeEnumReject           EventTypeEnum = "reject"
	EventTypeEnumBounce           EventTypeEnum = "bounce"
	EventTypeEnumComplaint        EventTypeEnum = "complaint"
	EventTypeEnumDelivery         EventTypeEnum = "delivery"
	EventTypeEnumOpen             EventTypeEnum = "open"
	EventTypeEnumClick            EventTypeEnum = "click"
	EventTypeEnumRenderingFailure EventTypeEnum = "renderingFailure"
)
