package shared



type DescribeEndpointSettingsResponse struct {
    EndpointSettings []EndpointSetting `json:"EndpointSettings,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

