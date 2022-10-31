package shared

type TimeToLiveDescription struct {
	AttributeName    *string               `json:"AttributeName,omitempty"`
	TimeToLiveStatus *TimeToLiveStatusEnum `json:"TimeToLiveStatus,omitempty"`
}
