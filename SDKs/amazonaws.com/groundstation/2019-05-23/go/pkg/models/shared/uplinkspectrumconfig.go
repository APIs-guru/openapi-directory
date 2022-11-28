package shared

// UplinkSpectrumConfig
// Information about the uplink spectral <code>Config</code>.
type UplinkSpectrumConfig struct {
	CenterFrequency Frequency         `json:"centerFrequency"`
	Polarization    *PolarizationEnum `json:"polarization,omitempty"`
}
