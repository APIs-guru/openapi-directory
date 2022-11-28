package shared

// AddonHealth
// The health of the add-on.
type AddonHealth struct {
	Issues []AddonIssue `json:"issues,omitempty"`
}
