package shared

type ListInstancesOutput struct {
	Instances []Instance `json:"Instances,omitempty"`
	Marker    *string    `json:"Marker,omitempty"`
}
