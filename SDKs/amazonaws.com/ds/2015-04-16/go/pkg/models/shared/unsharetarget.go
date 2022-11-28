package shared

// UnshareTarget
// Identifier that contains details about the directory consumer account with whom the directory is being unshared.
type UnshareTarget struct {
	ID   string         `json:"Id"`
	Type TargetTypeEnum `json:"Type"`
}
