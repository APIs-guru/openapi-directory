package shared

type GetDifferencesOutput struct {
	NextToken   *string      `json:"NextToken"`
	Differences []Difference `json:"differences"`
}
