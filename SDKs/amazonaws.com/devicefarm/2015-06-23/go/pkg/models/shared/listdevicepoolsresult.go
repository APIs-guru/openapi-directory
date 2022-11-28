package shared

// ListDevicePoolsResult
// Represents the result of a list device pools request.
type ListDevicePoolsResult struct {
	DevicePools []DevicePool `json:"devicePools,omitempty"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
