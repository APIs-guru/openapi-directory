package shared

type DeletePolicyRequest struct {
	DeleteAllPolicyResources *bool  `json:"DeleteAllPolicyResources"`
	PolicyID                 string `json:"PolicyId"`
}
