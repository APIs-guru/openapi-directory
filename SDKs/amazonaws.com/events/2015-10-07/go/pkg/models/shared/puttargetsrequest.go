package shared

type PutTargetsRequest struct {
	EventBusName *string  `json:"EventBusName"`
	Rule         string   `json:"Rule"`
	Targets      []Target `json:"Targets"`
}
