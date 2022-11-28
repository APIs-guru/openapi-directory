package shared

// ComponentConfiguration
//
//	Configuration details of the component.
type ComponentConfiguration struct {
	ComponentArn string               `json:"componentArn"`
	Parameters   []ComponentParameter `json:"parameters,omitempty"`
}
