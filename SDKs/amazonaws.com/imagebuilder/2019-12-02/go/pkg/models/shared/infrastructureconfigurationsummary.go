package shared

type InfrastructureConfigurationSummary struct {
	Arn                 *string           `json:"arn"`
	DateCreated         *string           `json:"dateCreated"`
	DateUpdated         *string           `json:"dateUpdated"`
	Description         *string           `json:"description"`
	InstanceProfileName *string           `json:"instanceProfileName"`
	InstanceTypes       []string          `json:"instanceTypes"`
	Name                *string           `json:"name"`
	ResourceTags        map[string]string `json:"resourceTags"`
	Tags                map[string]string `json:"tags"`
}
