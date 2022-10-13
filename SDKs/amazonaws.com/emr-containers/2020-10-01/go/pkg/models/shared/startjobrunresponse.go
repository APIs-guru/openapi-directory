package shared

type StartJobRunResponse struct {
	Arn              *string `json:"arn"`
	ID               *string `json:"id"`
	Name             *string `json:"name"`
	VirtualClusterID *string `json:"virtualClusterId"`
}
