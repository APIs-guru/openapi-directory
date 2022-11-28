package shared

// AccountRecoverySettingType
// The data type for <code>AccountRecoverySetting</code>.
type AccountRecoverySettingType struct {
	RecoveryMechanisms []RecoveryOptionType `json:"RecoveryMechanisms,omitempty"`
}
