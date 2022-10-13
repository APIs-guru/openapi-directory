package shared

type Layer struct {
	LayerAvailability *LayerAvailabilityEnum `json:"layerAvailability"`
	LayerDigest       *string                `json:"layerDigest"`
	LayerSize         *int64                 `json:"layerSize"`
	MediaType         *string                `json:"mediaType"`
}
