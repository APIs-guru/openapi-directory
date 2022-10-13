package shared

type ListUniqueProblemsResult struct {
	NextToken      *string                    `json:"nextToken"`
	UniqueProblems map[string][]UniqueProblem `json:"uniqueProblems"`
}
