package shared

// RealtimeLogConfigs
// A list of real-time log configurations.
type RealtimeLogConfigs struct {
	IsTruncated bool
	Items       []RealtimeLogConfig
	Marker      string
	MaxItems    int64
	NextMarker  *string
}
