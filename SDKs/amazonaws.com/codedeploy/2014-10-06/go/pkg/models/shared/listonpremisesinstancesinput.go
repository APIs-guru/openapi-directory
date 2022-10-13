package shared

type ListOnPremisesInstancesInput struct {
	NextToken          *string                 `json:"nextToken"`
	RegistrationStatus *RegistrationStatusEnum `json:"registrationStatus"`
	TagFilters         []TagFilter             `json:"tagFilters"`
}
