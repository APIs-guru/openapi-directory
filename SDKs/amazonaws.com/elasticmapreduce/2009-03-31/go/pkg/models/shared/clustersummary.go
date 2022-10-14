package shared

type ClusterSummary struct {
	ClusterArn              *string        `json:"ClusterArn,omitempty"`
	ID                      *string        `json:"Id,omitempty"`
	Name                    *string        `json:"Name,omitempty"`
	NormalizedInstanceHours *int64         `json:"NormalizedInstanceHours,omitempty"`
	OutpostArn              *string        `json:"OutpostArn,omitempty"`
	Status                  *ClusterStatus `json:"Status,omitempty"`
}
