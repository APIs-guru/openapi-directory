package shared

type ShareDirectoryRequest struct {
	DirectoryID string          `json:"DirectoryId"`
	ShareMethod ShareMethodEnum `json:"ShareMethod"`
	ShareNotes  *string         `json:"ShareNotes,omitempty"`
	ShareTarget ShareTarget     `json:"ShareTarget"`
}
