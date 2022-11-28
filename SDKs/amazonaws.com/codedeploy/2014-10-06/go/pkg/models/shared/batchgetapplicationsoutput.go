package shared

// BatchGetApplicationsOutput
// Represents the output of a <code>BatchGetApplications</code> operation.
type BatchGetApplicationsOutput struct {
	ApplicationsInfo []ApplicationInfo `json:"applicationsInfo,omitempty"`
}
