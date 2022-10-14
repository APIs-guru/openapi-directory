package shared

type ProjectSummary struct {
	ProjectArn *string `json:"projectArn,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
}
