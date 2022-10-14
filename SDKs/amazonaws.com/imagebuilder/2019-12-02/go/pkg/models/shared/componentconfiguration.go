package shared

type ComponentConfiguration struct {
	ComponentArn string               `json:"componentArn"`
	Parameters   []ComponentParameter `json:"parameters,omitempty"`
}
