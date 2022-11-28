package shared

// RecoveryOptionType
// A map containing a priority as a key, and recovery method name as a value.
type RecoveryOptionType struct {
	Name     RecoveryOptionNameTypeEnum `json:"Name"`
	Priority int64                      `json:"Priority"`
}
