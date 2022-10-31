package shared

type OpenTunnelRequest struct {
	Description       *string            `json:"description,omitempty"`
	DestinationConfig *DestinationConfig `json:"destinationConfig,omitempty"`
	Tags              []Tag              `json:"tags,omitempty"`
	TimeoutConfig     *TimeoutConfig     `json:"timeoutConfig,omitempty"`
}
