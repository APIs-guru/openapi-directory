package shared

type UpdateUploadRequest struct {
	Arn         string  `json:"arn"`
	ContentType *string `json:"contentType"`
	EditContent *bool   `json:"editContent"`
	Name        *string `json:"name"`
}
