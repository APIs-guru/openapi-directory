package shared

// AntennaDownlinkDemodDecodeConfig
// Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
type AntennaDownlinkDemodDecodeConfig struct {
	DecodeConfig       DecodeConfig       `json:"decodeConfig"`
	DemodulationConfig DemodulationConfig `json:"demodulationConfig"`
	SpectrumConfig     SpectrumConfig     `json:"spectrumConfig"`
}
