package shared




type AppPatchStatusEnum string

const (
    AppPatchStatusEnumEnabled AppPatchStatusEnum = "enabled"
AppPatchStatusEnumDisabled AppPatchStatusEnum = "disabled"
)


type AppPatch struct {
    ApnsCertificate *string `json:"apnsCertificate,omitempty"`
    ApnsPrivateKey *string `json:"apnsPrivateKey,omitempty"`
    ApnsUseSandboxEndpoint *bool `json:"apnsUseSandboxEndpoint,omitempty"`
    FcmKey *string `json:"fcmKey,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *AppPatchStatusEnum `json:"status,omitempty"`
    TLSOnly *bool `json:"tlsOnly,omitempty"`
    
}

