package shared

// ListBranchesOutput
// Represents the output of a list branches operation.
type ListBranchesOutput struct {
	Branches  []string `json:"branches,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
