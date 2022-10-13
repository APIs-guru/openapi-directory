package shared

type SearchDevicesResponse struct {
	Devices   []DeviceSummary `json:"devices"`
	NextToken *string         `json:"nextToken"`
}
