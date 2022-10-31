package shared

type DeviceSecretVerifierConfigType struct {
	PasswordVerifier *string `json:"PasswordVerifier,omitempty"`
	Salt             *string `json:"Salt,omitempty"`
}
