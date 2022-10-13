package shared

type GrpcTimeout struct {
	Idle       *Duration `json:"idle"`
	PerRequest *Duration `json:"perRequest"`
}
