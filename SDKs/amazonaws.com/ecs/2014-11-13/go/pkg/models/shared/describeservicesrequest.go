package shared

type DescribeServicesRequest struct {
	Cluster  *string            `json:"cluster"`
	Include  []ServiceFieldEnum `json:"include"`
	Services []string           `json:"services"`
}
