package shared

type ListDevicesRequest struct {
	Arn       *string        `json:"arn,omitempty"`
	Filters   []DeviceFilter `json:"filters,omitempty"`
	NextToken *string        `json:"nextToken,omitempty"`
}
