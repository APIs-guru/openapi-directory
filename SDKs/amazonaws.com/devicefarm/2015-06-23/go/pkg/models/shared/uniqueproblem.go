package shared

// UniqueProblem
// A collection of one or more problems, grouped by their result.
type UniqueProblem struct {
	Message  *string   `json:"message,omitempty"`
	Problems []Problem `json:"problems,omitempty"`
}
