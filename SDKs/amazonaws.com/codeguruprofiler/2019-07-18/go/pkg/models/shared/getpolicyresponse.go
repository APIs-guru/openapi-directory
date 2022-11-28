package shared

// GetPolicyResponse
// The structure representing the <code>getPolicyResponse</code>.
type GetPolicyResponse struct {
	Policy     string `json:"policy"`
	RevisionID string `json:"revisionId"`
}
