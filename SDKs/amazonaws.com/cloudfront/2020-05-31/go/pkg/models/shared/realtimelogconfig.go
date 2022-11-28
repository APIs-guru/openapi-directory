package shared

// RealtimeLogConfig
// A real-time log configuration.
type RealtimeLogConfig struct {
	Arn          string
	EndPoints    []EndPoint
	Fields       []string
	Name         string
	SamplingRate int64
}
