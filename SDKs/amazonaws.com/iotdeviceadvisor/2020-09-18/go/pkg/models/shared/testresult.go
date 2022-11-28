package shared

// TestResult
// Show each group result.
type TestResult struct {
	Groups []GroupResult `json:"groups,omitempty"`
}
