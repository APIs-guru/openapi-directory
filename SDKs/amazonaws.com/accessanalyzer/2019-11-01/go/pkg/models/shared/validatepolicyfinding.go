package shared



type ValidatePolicyFinding struct {
    FindingDetails string `json:"findingDetails"`
    FindingType ValidatePolicyFindingTypeEnum `json:"findingType"`
    IssueCode string `json:"issueCode"`
    LearnMoreLink string `json:"learnMoreLink"`
    Locations []Location `json:"locations"`
    
}

