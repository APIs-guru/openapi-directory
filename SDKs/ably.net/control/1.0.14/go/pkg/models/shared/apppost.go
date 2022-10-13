package shared

type AppPostStatusEnum string

const (
	AppPostStatusEnumEnabled  AppPostStatusEnum = "enabled"
	AppPostStatusEnumDisabled AppPostStatusEnum = "disabled"
)

type AppPost struct {
	ApnsCertificate        *string            `json:"apnsCertificate"`
	ApnsPrivateKey         *string            `json:"apnsPrivateKey"`
	ApnsUseSandboxEndpoint *bool              `json:"apnsUseSandboxEndpoint"`
	FcmKey                 *string            `json:"fcmKey"`
	Name                   string             `json:"name"`
	Status                 *AppPostStatusEnum `json:"status"`
	TLSOnly                *bool              `json:"tlsOnly"`
}
