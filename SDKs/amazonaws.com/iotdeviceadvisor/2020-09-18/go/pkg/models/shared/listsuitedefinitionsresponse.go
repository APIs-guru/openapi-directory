package shared

type ListSuiteDefinitionsResponse struct {
	NextToken                      *string                      `json:"nextToken"`
	SuiteDefinitionInformationList []SuiteDefinitionInformation `json:"suiteDefinitionInformationList"`
}
