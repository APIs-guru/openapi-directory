package shared



type UpdateEndpointRequest struct {
    DesiredInferenceUnits int64 `json:"DesiredInferenceUnits"`
    EndpointArn string `json:"EndpointArn"`
    
}

