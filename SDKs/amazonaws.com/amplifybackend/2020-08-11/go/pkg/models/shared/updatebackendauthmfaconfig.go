package shared

type UpdateBackendAuthMfaConfig struct {
	MfaMode  *MfaModeEnum `json:"MFAMode"`
	Settings *Settings    `json:"Settings"`
}
