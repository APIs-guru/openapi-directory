package shared

type ListDeviceInstancesResult struct {
	DeviceInstances []DeviceInstance `json:"deviceInstances,omitempty"`
	NextToken       *string          `json:"nextToken,omitempty"`
}
