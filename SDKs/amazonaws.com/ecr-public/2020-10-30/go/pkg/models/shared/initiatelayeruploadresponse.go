package shared

type InitiateLayerUploadResponse struct {
	PartSize *int64  `json:"partSize"`
	UploadID *string `json:"uploadId"`
}
