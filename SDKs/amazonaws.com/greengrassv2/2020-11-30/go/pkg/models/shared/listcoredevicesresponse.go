package shared

type ListCoreDevicesResponse struct {
	CoreDevices []CoreDevice `json:"coreDevices,omitempty"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
