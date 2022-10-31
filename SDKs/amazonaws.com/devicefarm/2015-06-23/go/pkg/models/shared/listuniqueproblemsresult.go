package shared

type ListUniqueProblemsResult struct {
	NextToken      *string                    `json:"nextToken,omitempty"`
	UniqueProblems map[string][]UniqueProblem `json:"uniqueProblems,omitempty"`
}
