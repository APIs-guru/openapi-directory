package shared



type VpcLink struct {
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *VpcLinkStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TargetArns []string `json:"targetArns,omitempty"`
    
}

