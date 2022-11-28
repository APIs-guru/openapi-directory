package shared

// ListInstancesOutput
// This output contains the list of instances.
type ListInstancesOutput struct {
	Instances []Instance `json:"Instances,omitempty"`
	Marker    *string    `json:"Marker,omitempty"`
}
