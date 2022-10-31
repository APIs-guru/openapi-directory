package shared



type LayerFailure struct {
    FailureCode *LayerFailureCodeEnum `json:"failureCode,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    LayerDigest *string `json:"layerDigest,omitempty"`
    
}

