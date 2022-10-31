package shared

type ListDevicePoolsResult struct {
	DevicePools []DevicePool `json:"devicePools,omitempty"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
