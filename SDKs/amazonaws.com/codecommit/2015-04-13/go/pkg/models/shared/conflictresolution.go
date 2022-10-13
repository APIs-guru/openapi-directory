package shared

type ConflictResolution struct {
	DeleteFiles     []DeleteFileEntry     `json:"deleteFiles"`
	ReplaceContents []ReplaceContentEntry `json:"replaceContents"`
	SetFileModes    []SetFileModeEntry    `json:"setFileModes"`
}
