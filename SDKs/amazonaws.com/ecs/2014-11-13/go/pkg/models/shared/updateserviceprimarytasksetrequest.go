package shared

type UpdateServicePrimaryTaskSetRequest struct {
	Cluster        string `json:"cluster"`
	PrimaryTaskSet string `json:"primaryTaskSet"`
	Service        string `json:"service"`
}
