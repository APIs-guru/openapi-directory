package shared

type Resource struct {
	ID                    string                `json:"Id"`
	Name                  string                `json:"Name"`
	ResourceDataContainer ResourceDataContainer `json:"ResourceDataContainer"`
}
