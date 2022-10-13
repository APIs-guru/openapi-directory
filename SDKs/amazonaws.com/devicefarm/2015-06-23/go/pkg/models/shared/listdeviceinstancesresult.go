package shared

type ListDeviceInstancesResult struct {
	DeviceInstances []DeviceInstance `json:"deviceInstances"`
	NextToken       *string          `json:"nextToken"`
}
