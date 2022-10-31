package shared

type ListScriptsInput struct {
	Limit     *int64  `json:"Limit,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
