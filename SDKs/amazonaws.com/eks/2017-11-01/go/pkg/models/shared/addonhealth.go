package shared

type AddonHealth struct {
	Issues []AddonIssue `json:"issues,omitempty"`
}
