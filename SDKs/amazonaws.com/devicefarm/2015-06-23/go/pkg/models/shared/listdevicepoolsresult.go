package shared

type ListDevicePoolsResult struct {
	DevicePools []DevicePool `json:"devicePools"`
	NextToken   *string      `json:"nextToken"`
}
