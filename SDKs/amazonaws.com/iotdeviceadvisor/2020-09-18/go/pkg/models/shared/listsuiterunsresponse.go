package shared

type ListSuiteRunsResponse struct {
	NextToken     *string               `json:"nextToken"`
	SuiteRunsList []SuiteRunInformation `json:"suiteRunsList"`
}
