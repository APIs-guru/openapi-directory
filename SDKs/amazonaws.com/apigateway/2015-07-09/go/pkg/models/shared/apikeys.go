package shared

type APIKeys struct {
	Items    []APIKey `json:"items"`
	Position *string  `json:"position"`
	Warnings []string `json:"warnings"`
}
