package shared

// TestCaseFilter
// A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.
type TestCaseFilter struct {
	Keyword *string `json:"keyword,omitempty"`
	Status  *string `json:"status,omitempty"`
}
