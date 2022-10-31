package shared

type InitiateLayerUploadResponse struct {
	PartSize *int64  `json:"partSize,omitempty"`
	UploadID *string `json:"uploadId,omitempty"`
}
