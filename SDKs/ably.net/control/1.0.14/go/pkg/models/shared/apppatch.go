package shared

type AppPatchStatusEnum string

const (
	AppPatchStatusEnumEnabled  AppPatchStatusEnum = "enabled"
	AppPatchStatusEnumDisabled AppPatchStatusEnum = "disabled"
)

type AppPatch struct {
	ApnsCertificate        *string             `json:"apnsCertificate"`
	ApnsPrivateKey         *string             `json:"apnsPrivateKey"`
	ApnsUseSandboxEndpoint *bool               `json:"apnsUseSandboxEndpoint"`
	FcmKey                 *string             `json:"fcmKey"`
	Name                   *string             `json:"name"`
	Status                 *AppPatchStatusEnum `json:"status"`
	TLSOnly                *bool               `json:"tlsOnly"`
}
