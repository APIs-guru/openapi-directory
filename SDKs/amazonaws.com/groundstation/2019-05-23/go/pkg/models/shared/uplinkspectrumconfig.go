package shared

type UplinkSpectrumConfig struct {
	CenterFrequency Frequency         `json:"centerFrequency"`
	Polarization    *PolarizationEnum `json:"polarization,omitempty"`
}
