package shared

type ListProblemsResponse struct {
	NextToken   *string   `json:"NextToken"`
	ProblemList []Problem `json:"ProblemList"`
}
