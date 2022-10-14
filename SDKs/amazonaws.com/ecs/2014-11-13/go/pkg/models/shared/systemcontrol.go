package shared

type SystemControl struct {
	Namespace *string `json:"namespace,omitempty"`
	Value     *string `json:"value,omitempty"`
}
