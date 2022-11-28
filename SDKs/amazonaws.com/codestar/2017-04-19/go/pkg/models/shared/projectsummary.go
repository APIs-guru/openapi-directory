package shared

// ProjectSummary
// Information about the metadata for a project.
type ProjectSummary struct {
	ProjectArn *string `json:"projectArn,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
}
