package shared

type TimeToLiveDescription struct {
	AttributeName    *string               `json:"AttributeName"`
	TimeToLiveStatus *TimeToLiveStatusEnum `json:"TimeToLiveStatus"`
}
