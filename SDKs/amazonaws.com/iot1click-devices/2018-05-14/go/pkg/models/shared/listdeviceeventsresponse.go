package shared

type ListDeviceEventsResponse struct {
	Events    []DeviceEvent `json:"Events"`
	NextToken *string       `json:"NextToken"`
}
