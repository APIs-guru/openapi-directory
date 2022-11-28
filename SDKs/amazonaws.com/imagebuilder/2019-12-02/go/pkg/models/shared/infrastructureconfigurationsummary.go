package shared

// InfrastructureConfigurationSummary
// The infrastructure used when building Amazon EC2 AMIs.
type InfrastructureConfigurationSummary struct {
	Arn                 *string           `json:"arn,omitempty"`
	DateCreated         *string           `json:"dateCreated,omitempty"`
	DateUpdated         *string           `json:"dateUpdated,omitempty"`
	Description         *string           `json:"description,omitempty"`
	InstanceProfileName *string           `json:"instanceProfileName,omitempty"`
	InstanceTypes       []string          `json:"instanceTypes,omitempty"`
	Name                *string           `json:"name,omitempty"`
	ResourceTags        map[string]string `json:"resourceTags,omitempty"`
	Tags                map[string]string `json:"tags,omitempty"`
}
