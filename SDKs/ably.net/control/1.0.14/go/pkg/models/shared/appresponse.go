package shared




type AppResponseStatusEnum string

const (
    AppResponseStatusEnumEnabled AppResponseStatusEnum = "enabled"
AppResponseStatusEnumDisabled AppResponseStatusEnum = "disabled"
)


type AppResponse struct {
    Links map[string]interface{} `json:"_links,omitempty"`
    AccountID *string `json:"accountId,omitempty"`
    ApnsUseSandboxEndpoint *bool `json:"apnsUseSandboxEndpoint,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *AppResponseStatusEnum `json:"status,omitempty"`
    TLSOnly *bool `json:"tlsOnly,omitempty"`
    
}

