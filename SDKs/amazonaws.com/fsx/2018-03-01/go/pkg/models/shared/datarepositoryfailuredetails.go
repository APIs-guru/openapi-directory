package shared

// DataRepositoryFailureDetails
// Provides detailed information about the data respository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code>.
type DataRepositoryFailureDetails struct {
	Message *string `json:"Message,omitempty"`
}
