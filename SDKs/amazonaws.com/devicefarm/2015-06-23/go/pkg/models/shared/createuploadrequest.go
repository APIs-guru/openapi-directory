package shared

type CreateUploadRequest struct {
	ContentType *string        `json:"contentType"`
	Name        string         `json:"name"`
	ProjectArn  string         `json:"projectArn"`
	Type        UploadTypeEnum `json:"type"`
}
