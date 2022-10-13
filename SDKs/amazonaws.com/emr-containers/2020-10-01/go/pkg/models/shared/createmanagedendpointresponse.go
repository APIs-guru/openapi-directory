package shared

type CreateManagedEndpointResponse struct {
	Arn              *string `json:"arn"`
	ID               *string `json:"id"`
	Name             *string `json:"name"`
	VirtualClusterID *string `json:"virtualClusterId"`
}
