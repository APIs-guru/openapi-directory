package shared

// DataRepositoryTaskFailureDetails
// Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.
type DataRepositoryTaskFailureDetails struct {
	Message *string `json:"Message,omitempty"`
}
