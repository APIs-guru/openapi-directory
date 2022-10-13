package shared

type ListMultipartUploadsOutput struct {
	Marker      *string             `json:"Marker"`
	UploadsList []UploadListElement `json:"UploadsList"`
}
