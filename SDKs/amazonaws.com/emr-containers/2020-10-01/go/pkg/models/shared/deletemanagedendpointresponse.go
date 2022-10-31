package shared

type DeleteManagedEndpointResponse struct {
	ID               *string `json:"id,omitempty"`
	VirtualClusterID *string `json:"virtualClusterId,omitempty"`
}
