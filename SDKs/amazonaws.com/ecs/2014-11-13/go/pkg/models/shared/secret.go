package shared

type Secret struct {
	Name      string `json:"name"`
	ValueFrom string `json:"valueFrom"`
}
