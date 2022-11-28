package shared

// DistributionConfiguration
// A distribution configuration.
type DistributionConfiguration struct {
	Arn            *string           `json:"arn,omitempty"`
	DateCreated    *string           `json:"dateCreated,omitempty"`
	DateUpdated    *string           `json:"dateUpdated,omitempty"`
	Description    *string           `json:"description,omitempty"`
	Distributions  []Distribution    `json:"distributions,omitempty"`
	Name           *string           `json:"name,omitempty"`
	Tags           map[string]string `json:"tags,omitempty"`
	TimeoutMinutes int64             `json:"timeoutMinutes"`
}
