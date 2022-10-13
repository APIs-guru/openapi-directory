package shared

type RemoveTargetsRequest struct {
	EventBusName *string  `json:"EventBusName"`
	Force        *bool    `json:"Force"`
	Ids          []string `json:"Ids"`
	Rule         string   `json:"Rule"`
}
