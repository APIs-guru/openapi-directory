package shared

// ListDevicesRequest
// Represents the result of a list devices request.
type ListDevicesRequest struct {
	Arn       *string        `json:"arn,omitempty"`
	Filters   []DeviceFilter `json:"filters,omitempty"`
	NextToken *string        `json:"nextToken,omitempty"`
}
