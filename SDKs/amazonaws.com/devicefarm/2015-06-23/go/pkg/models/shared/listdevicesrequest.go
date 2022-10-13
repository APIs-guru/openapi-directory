package shared

type ListDevicesRequest struct {
	Arn       *string        `json:"arn"`
	Filters   []DeviceFilter `json:"filters"`
	NextToken *string        `json:"nextToken"`
}
