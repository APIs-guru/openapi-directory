package shared

// SpectrumConfig
// Object that describes a spectral <code>Config</code>.
type SpectrumConfig struct {
	Bandwidth       FrequencyBandwidth `json:"bandwidth"`
	CenterFrequency Frequency          `json:"centerFrequency"`
	Polarization    *PolarizationEnum  `json:"polarization,omitempty"`
}
