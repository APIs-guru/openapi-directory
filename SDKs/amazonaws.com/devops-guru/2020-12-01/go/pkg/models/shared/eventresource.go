package shared

type EventResource struct {
	Arn  *string `json:"Arn,omitempty"`
	Name *string `json:"Name,omitempty"`
	Type *string `json:"Type,omitempty"`
}
