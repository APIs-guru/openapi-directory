package shared

type ListBuildsOutput struct {
	Builds    []Build `json:"Builds,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
