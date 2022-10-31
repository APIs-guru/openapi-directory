package shared

type AntennaUplinkConfig struct {
	SpectrumConfig   UplinkSpectrumConfig `json:"spectrumConfig"`
	TargetEirp       Eirp                 `json:"targetEirp"`
	TransmitDisabled *bool                `json:"transmitDisabled,omitempty"`
}
