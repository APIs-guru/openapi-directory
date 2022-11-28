package shared

// ListBranchesResult
//
//	The result structure for the list branches request.
type ListBranchesResult struct {
	Branches  []Branch `json:"branches"`
	NextToken *string  `json:"nextToken,omitempty"`
}
