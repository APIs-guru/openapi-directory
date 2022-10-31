package shared

type RecoveryOptionType struct {
	Name     RecoveryOptionNameTypeEnum `json:"Name"`
	Priority int64                      `json:"Priority"`
}
