package shared

type ListBranchesOutput struct {
	Branches  []string `json:"branches"`
	NextToken *string  `json:"nextToken"`
}
