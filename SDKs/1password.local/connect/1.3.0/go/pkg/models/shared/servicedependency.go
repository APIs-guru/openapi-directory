package shared

type ServiceDependency struct {
	Message *string `json:"message"`
	Service *string `json:"service"`
	Status  *string `json:"status"`
}
