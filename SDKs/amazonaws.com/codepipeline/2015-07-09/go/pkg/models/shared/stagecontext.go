package shared

// StageContext
// Represents information about a stage to a job worker.
type StageContext struct {
	Name *string `json:"name,omitempty"`
}
