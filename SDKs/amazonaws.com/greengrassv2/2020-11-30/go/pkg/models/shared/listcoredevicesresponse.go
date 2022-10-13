package shared

type ListCoreDevicesResponse struct {
	CoreDevices []CoreDevice `json:"coreDevices"`
	NextToken   *string      `json:"nextToken"`
}
