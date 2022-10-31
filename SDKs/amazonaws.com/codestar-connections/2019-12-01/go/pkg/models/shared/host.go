package shared



type Host struct {
    HostArn *string `json:"HostArn,omitempty"`
    Name *string `json:"Name,omitempty"`
    ProviderEndpoint *string `json:"ProviderEndpoint,omitempty"`
    ProviderType *ProviderTypeEnum `json:"ProviderType,omitempty"`
    Status *string `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    VpcConfiguration *VpcConfiguration `json:"VpcConfiguration,omitempty"`
    
}

