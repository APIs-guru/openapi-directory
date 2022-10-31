package shared

type RemovePermissionResponse struct {
	Policy     string `json:"policy"`
	RevisionID string `json:"revisionId"`
}
