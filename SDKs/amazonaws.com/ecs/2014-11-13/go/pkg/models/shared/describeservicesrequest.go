package shared

type DescribeServicesRequest struct {
	Cluster  *string            `json:"cluster,omitempty"`
	Include  []ServiceFieldEnum `json:"include,omitempty"`
	Services []string           `json:"services"`
}
