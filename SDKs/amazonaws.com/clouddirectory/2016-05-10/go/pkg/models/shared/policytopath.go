package shared

// PolicyToPath
// Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
type PolicyToPath struct {
	Path     *string            `json:"Path,omitempty"`
	Policies []PolicyAttachment `json:"Policies,omitempty"`
}
