package shared

// TimeToLiveDescription
// The description of the Time to Live (TTL) status on the specified table.
type TimeToLiveDescription struct {
	AttributeName    *string               `json:"AttributeName,omitempty"`
	TimeToLiveStatus *TimeToLiveStatusEnum `json:"TimeToLiveStatus,omitempty"`
}
