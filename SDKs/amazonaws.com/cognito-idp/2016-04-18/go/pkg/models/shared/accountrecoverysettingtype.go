package shared

type AccountRecoverySettingType struct {
	RecoveryMechanisms []RecoveryOptionType `json:"RecoveryMechanisms,omitempty"`
}
