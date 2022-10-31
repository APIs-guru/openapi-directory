package shared

type ListScriptsOutput struct {
	NextToken *string  `json:"NextToken,omitempty"`
	Scripts   []Script `json:"Scripts,omitempty"`
}
