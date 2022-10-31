package shared



type GetHostOutput struct {
    Name *string `json:"Name,omitempty"`
    ProviderEndpoint *string `json:"ProviderEndpoint,omitempty"`
    ProviderType *ProviderTypeEnum `json:"ProviderType,omitempty"`
    Status *string `json:"Status,omitempty"`
    VpcConfiguration *VpcConfiguration `json:"VpcConfiguration,omitempty"`
    
}

