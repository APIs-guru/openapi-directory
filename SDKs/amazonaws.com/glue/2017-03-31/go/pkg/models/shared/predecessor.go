package shared

// Predecessor
// A job run that was used in the predicate of a conditional trigger that triggered this job run.
type Predecessor struct {
	JobName *string `json:"JobName,omitempty"`
	RunID   *string `json:"RunId,omitempty"`
}
