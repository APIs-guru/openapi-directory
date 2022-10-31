package shared



type Layer struct {
    LayerAvailability *LayerAvailabilityEnum `json:"layerAvailability,omitempty"`
    LayerDigest *string `json:"layerDigest,omitempty"`
    LayerSize *int64 `json:"layerSize,omitempty"`
    MediaType *string `json:"mediaType,omitempty"`
    
}

