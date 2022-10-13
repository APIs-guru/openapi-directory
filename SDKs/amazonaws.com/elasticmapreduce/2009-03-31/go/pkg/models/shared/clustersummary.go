package shared

type ClusterSummary struct {
	ClusterArn              *string        `json:"ClusterArn"`
	ID                      *string        `json:"Id"`
	Name                    *string        `json:"Name"`
	NormalizedInstanceHours *int64         `json:"NormalizedInstanceHours"`
	OutpostArn              *string        `json:"OutpostArn"`
	Status                  *ClusterStatus `json:"Status"`
}
