package shared

type ListBuildsOutput struct {
	Builds    []Build `json:"Builds"`
	NextToken *string `json:"NextToken"`
}
