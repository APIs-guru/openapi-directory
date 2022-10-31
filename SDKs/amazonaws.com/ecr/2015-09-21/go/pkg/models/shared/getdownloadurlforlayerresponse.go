package shared



type GetDownloadURLForLayerResponse struct {
    DownloadURL *string `json:"downloadUrl,omitempty"`
    LayerDigest *string `json:"layerDigest,omitempty"`
    
}

