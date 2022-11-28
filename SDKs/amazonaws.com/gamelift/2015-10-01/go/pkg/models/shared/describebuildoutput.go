package shared

// DescribeBuildOutput
// Represents the returned data in response to a request operation.
type DescribeBuildOutput struct {
	Build *Build `json:"Build,omitempty"`
}
