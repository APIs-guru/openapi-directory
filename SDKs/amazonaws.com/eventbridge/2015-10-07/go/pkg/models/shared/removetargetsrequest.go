package shared

type RemoveTargetsRequest struct {
	EventBusName *string  `json:"EventBusName,omitempty"`
	Force        *bool    `json:"Force,omitempty"`
	Ids          []string `json:"Ids"`
	Rule         string   `json:"Rule"`
}
