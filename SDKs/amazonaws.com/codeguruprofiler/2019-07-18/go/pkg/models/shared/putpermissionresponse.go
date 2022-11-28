package shared

// PutPermissionResponse
// The structure representing the <code>putPermissionResponse</code>.
type PutPermissionResponse struct {
	Policy     string `json:"policy"`
	RevisionID string `json:"revisionId"`
}
