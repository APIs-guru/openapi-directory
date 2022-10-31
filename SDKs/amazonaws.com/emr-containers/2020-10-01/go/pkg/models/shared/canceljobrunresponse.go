package shared

type CancelJobRunResponse struct {
	ID               *string `json:"id,omitempty"`
	VirtualClusterID *string `json:"virtualClusterId,omitempty"`
}
