package shared

type ListScriptsInput struct {
	Limit     *int64  `json:"Limit"`
	NextToken *string `json:"NextToken"`
}
