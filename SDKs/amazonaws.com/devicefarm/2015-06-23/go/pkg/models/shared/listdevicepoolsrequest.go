package shared

// ListDevicePoolsRequest
// Represents the result of a list device pools request.
type ListDevicePoolsRequest struct {
	Arn       string              `json:"arn"`
	NextToken *string             `json:"nextToken,omitempty"`
	Type      *DevicePoolTypeEnum `json:"type,omitempty"`
}
