package shared

// NotificationConfiguration
// The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
type NotificationConfiguration struct {
	Channels []Channel `json:"channels,omitempty"`
}
