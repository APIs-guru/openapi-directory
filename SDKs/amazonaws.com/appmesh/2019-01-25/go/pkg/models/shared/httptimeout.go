package shared

type HTTPTimeout struct {
	Idle       *Duration `json:"idle"`
	PerRequest *Duration `json:"perRequest"`
}
