package shared

type DescribeEndpointSettingsMessage struct {
	EngineName string  `json:"EngineName"`
	Marker     *string `json:"Marker,omitempty"`
	MaxRecords *int64  `json:"MaxRecords,omitempty"`
}
