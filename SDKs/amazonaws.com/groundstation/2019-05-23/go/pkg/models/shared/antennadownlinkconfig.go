package shared

// AntennaDownlinkConfig
// Information about how AWS Ground Station should configure an antenna for downlink during a contact.
type AntennaDownlinkConfig struct {
	SpectrumConfig SpectrumConfig `json:"spectrumConfig"`
}
