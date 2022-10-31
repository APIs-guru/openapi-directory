package shared



type ImportComponentResponse struct {
    ClientToken *string `json:"clientToken,omitempty"`
    ComponentBuildVersionArn *string `json:"componentBuildVersionArn,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

