package shared

type PutPermissionResponse struct {
	Policy     string `json:"policy"`
	RevisionID string `json:"revisionId"`
}
