package shared

// FrequencyBandwidth
// Object that describes the frequency bandwidth.
type FrequencyBandwidth struct {
	Units BandwidthUnitsEnum `json:"units"`
	Value float64            `json:"value"`
}
