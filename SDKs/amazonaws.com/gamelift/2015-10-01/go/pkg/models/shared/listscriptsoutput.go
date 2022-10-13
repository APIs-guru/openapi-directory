package shared

type ListScriptsOutput struct {
	NextToken *string  `json:"NextToken"`
	Scripts   []Script `json:"Scripts"`
}
