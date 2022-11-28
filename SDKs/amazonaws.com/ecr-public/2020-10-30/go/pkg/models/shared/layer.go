package shared

// Layer
// An object representing an Amazon ECR image layer.
type Layer struct {
	LayerAvailability *LayerAvailabilityEnum `json:"layerAvailability,omitempty"`
	LayerDigest       *string                `json:"layerDigest,omitempty"`
	LayerSize         *int64                 `json:"layerSize,omitempty"`
	MediaType         *string                `json:"mediaType,omitempty"`
}
