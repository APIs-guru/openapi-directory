package shared

type ListFleetsInput struct {
	BuildID   *string `json:"BuildId"`
	Limit     *int64  `json:"Limit"`
	NextToken *string `json:"NextToken"`
	ScriptID  *string `json:"ScriptId"`
}
