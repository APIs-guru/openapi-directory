package shared

// DeviceSecretVerifierConfigType
// The device verifier against which it will be authenticated.
type DeviceSecretVerifierConfigType struct {
	PasswordVerifier *string `json:"PasswordVerifier,omitempty"`
	Salt             *string `json:"Salt,omitempty"`
}
