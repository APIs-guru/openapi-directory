package shared

type ListInstancesOutput struct {
	Instances []Instance `json:"Instances"`
	Marker    *string    `json:"Marker"`
}
