package shared

// ListApplicationsOutput
// Represents the output of a ListApplications operation.
type ListApplicationsOutput struct {
	Applications []string `json:"applications,omitempty"`
	NextToken    *string  `json:"nextToken,omitempty"`
}
