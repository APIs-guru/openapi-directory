package shared

type APIKeys struct {
	Items    []APIKey `json:"items,omitempty"`
	Position *string  `json:"position,omitempty"`
	Warnings []string `json:"warnings,omitempty"`
}
