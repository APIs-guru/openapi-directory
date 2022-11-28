package shared

// GetTestResult
// Represents the result of a get test request.
type GetTestResult struct {
	Test *Test `json:"test,omitempty"`
}
