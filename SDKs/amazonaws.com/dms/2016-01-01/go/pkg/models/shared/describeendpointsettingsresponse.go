package shared

type DescribeEndpointSettingsResponse struct {
	EndpointSettings []EndpointSetting `json:"EndpointSettings"`
	Marker           *string           `json:"Marker"`
}
