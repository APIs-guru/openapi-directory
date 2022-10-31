package shared

type ListSuiteRunsResponse struct {
	NextToken     *string               `json:"nextToken,omitempty"`
	SuiteRunsList []SuiteRunInformation `json:"suiteRunsList,omitempty"`
}
