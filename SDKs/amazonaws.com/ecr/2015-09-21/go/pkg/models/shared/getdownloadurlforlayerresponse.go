package shared

type GetDownloadURLForLayerResponse struct {
	DownloadURL *string `json:"downloadUrl"`
	LayerDigest *string `json:"layerDigest"`
}
