package shared

type UploadDocumentsResponse struct {
	Adds     *int64                   `json:"adds"`
	Deletes  *int64                   `json:"deletes"`
	Status   *string                  `json:"status"`
	Warnings []DocumentServiceWarning `json:"warnings"`
}
