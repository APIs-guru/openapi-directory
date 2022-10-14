package shared

type ConflictResolution struct {
	DeleteFiles     []DeleteFileEntry     `json:"deleteFiles,omitempty"`
	ReplaceContents []ReplaceContentEntry `json:"replaceContents,omitempty"`
	SetFileModes    []SetFileModeEntry    `json:"setFileModes,omitempty"`
}
