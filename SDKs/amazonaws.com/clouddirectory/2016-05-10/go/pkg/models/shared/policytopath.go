package shared

type PolicyToPath struct {
	Path     *string            `json:"Path,omitempty"`
	Policies []PolicyAttachment `json:"Policies,omitempty"`
}
