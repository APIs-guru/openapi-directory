package shared

// AntennaUplinkConfig
// Information about the uplink <code>Config</code> of an antenna.
type AntennaUplinkConfig struct {
	SpectrumConfig   UplinkSpectrumConfig `json:"spectrumConfig"`
	TargetEirp       Eirp                 `json:"targetEirp"`
	TransmitDisabled *bool                `json:"transmitDisabled,omitempty"`
}
