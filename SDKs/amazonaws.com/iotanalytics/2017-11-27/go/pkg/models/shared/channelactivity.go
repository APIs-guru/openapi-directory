package shared

// ChannelActivity
// The activity that determines the source of the messages to be processed.
type ChannelActivity struct {
	ChannelName string  `json:"channelName"`
	Name        string  `json:"name"`
	Next        *string `json:"next,omitempty"`
}
