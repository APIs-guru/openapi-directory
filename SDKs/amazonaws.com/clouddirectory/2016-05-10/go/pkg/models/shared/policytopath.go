package shared

type PolicyToPath struct {
	Path     *string            `json:"Path"`
	Policies []PolicyAttachment `json:"Policies"`
}
