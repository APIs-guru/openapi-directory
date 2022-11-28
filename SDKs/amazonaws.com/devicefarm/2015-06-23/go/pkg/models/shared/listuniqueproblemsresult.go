package shared

// ListUniqueProblemsResult
// Represents the result of a list unique problems request.
type ListUniqueProblemsResult struct {
	NextToken      *string                    `json:"nextToken,omitempty"`
	UniqueProblems map[string][]UniqueProblem `json:"uniqueProblems,omitempty"`
}
