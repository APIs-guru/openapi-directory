package shared



type AccessEndpoint struct {
    EndpointType AccessEndpointTypeEnum `json:"EndpointType"`
    VpceID *string `json:"VpceId,omitempty"`
    
}

