package shared

type AntennaDownlinkDemodDecodeConfig struct {
	DecodeConfig       DecodeConfig       `json:"decodeConfig"`
	DemodulationConfig DemodulationConfig `json:"demodulationConfig"`
	SpectrumConfig     SpectrumConfig     `json:"spectrumConfig"`
}
