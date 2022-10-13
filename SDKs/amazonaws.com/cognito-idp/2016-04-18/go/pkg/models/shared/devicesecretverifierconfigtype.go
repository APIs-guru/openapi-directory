package shared

type DeviceSecretVerifierConfigType struct {
	PasswordVerifier *string `json:"PasswordVerifier"`
	Salt             *string `json:"Salt"`
}
