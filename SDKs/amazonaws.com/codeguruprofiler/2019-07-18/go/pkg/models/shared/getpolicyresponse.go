package shared

type GetPolicyResponse struct {
	Policy     string `json:"policy"`
	RevisionID string `json:"revisionId"`
}
