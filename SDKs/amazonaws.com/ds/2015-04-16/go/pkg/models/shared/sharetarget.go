package shared

// ShareTarget
// Identifier that contains details about the directory consumer account.
type ShareTarget struct {
	ID   string         `json:"Id"`
	Type TargetTypeEnum `json:"Type"`
}
