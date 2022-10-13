package shared

type OpenTunnelRequest struct {
	Description       *string            `json:"description"`
	DestinationConfig *DestinationConfig `json:"destinationConfig"`
	Tags              []Tag              `json:"tags"`
	TimeoutConfig     *TimeoutConfig     `json:"timeoutConfig"`
}
