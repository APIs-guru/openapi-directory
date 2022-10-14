package shared

type SpectrumConfig struct {
	Bandwidth       FrequencyBandwidth `json:"bandwidth"`
	CenterFrequency Frequency          `json:"centerFrequency"`
	Polarization    *PolarizationEnum  `json:"polarization,omitempty"`
}
