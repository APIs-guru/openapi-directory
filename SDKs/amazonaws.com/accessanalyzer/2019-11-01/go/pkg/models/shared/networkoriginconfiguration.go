package shared



type NetworkOriginConfiguration struct {
    InternetConfiguration map[string]interface{} `json:"internetConfiguration,omitempty"`
    VpcConfiguration *VpcConfiguration `json:"vpcConfiguration,omitempty"`
    
}

