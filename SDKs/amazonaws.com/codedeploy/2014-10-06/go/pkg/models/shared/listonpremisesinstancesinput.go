package shared



type ListOnPremisesInstancesInput struct {
    NextToken *string `json:"nextToken,omitempty"`
    RegistrationStatus *RegistrationStatusEnum `json:"registrationStatus,omitempty"`
    TagFilters []TagFilter `json:"tagFilters,omitempty"`
    
}

