package shared

type RulesPackage struct {
	Arn         string  `json:"arn"`
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	Provider    string  `json:"provider"`
	Version     string  `json:"version"`
}
