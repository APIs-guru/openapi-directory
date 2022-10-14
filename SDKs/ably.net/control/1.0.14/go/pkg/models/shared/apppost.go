package shared

type AppPostStatusEnum string

const (
	AppPostStatusEnumEnabled  AppPostStatusEnum = "enabled"
	AppPostStatusEnumDisabled AppPostStatusEnum = "disabled"
)

type AppPost struct {
	ApnsCertificate        *string            `json:"apnsCertificate,omitempty"`
	ApnsPrivateKey         *string            `json:"apnsPrivateKey,omitempty"`
	ApnsUseSandboxEndpoint *bool              `json:"apnsUseSandboxEndpoint,omitempty"`
	FcmKey                 *string            `json:"fcmKey,omitempty"`
	Name                   string             `json:"name"`
	Status                 *AppPostStatusEnum `json:"status,omitempty"`
	TLSOnly                *bool              `json:"tlsOnly,omitempty"`
}
