package shared

type UpdateTaskSetRequest struct {
	Cluster string `json:"cluster"`
	Scale   Scale  `json:"scale"`
	Service string `json:"service"`
	TaskSet string `json:"taskSet"`
}
