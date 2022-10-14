package shared

type CreateManagedEndpointResponse struct {
	Arn              *string `json:"arn,omitempty"`
	ID               *string `json:"id,omitempty"`
	Name             *string `json:"name,omitempty"`
	VirtualClusterID *string `json:"virtualClusterId,omitempty"`
}
