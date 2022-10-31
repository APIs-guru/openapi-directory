package shared



type ListSuiteDefinitionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SuiteDefinitionInformationList []SuiteDefinitionInformation `json:"suiteDefinitionInformationList,omitempty"`
    
}

