package shared

// ConflictResolution
// If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
type ConflictResolution struct {
	DeleteFiles     []DeleteFileEntry     `json:"deleteFiles,omitempty"`
	ReplaceContents []ReplaceContentEntry `json:"replaceContents,omitempty"`
	SetFileModes    []SetFileModeEntry    `json:"setFileModes,omitempty"`
}
