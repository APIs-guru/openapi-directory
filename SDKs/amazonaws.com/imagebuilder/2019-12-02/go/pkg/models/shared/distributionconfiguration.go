package shared

type DistributionConfiguration struct {
	Arn            *string           `json:"arn"`
	DateCreated    *string           `json:"dateCreated"`
	DateUpdated    *string           `json:"dateUpdated"`
	Description    *string           `json:"description"`
	Distributions  []Distribution    `json:"distributions"`
	Name           *string           `json:"name"`
	Tags           map[string]string `json:"tags"`
	TimeoutMinutes int64             `json:"timeoutMinutes"`
}
