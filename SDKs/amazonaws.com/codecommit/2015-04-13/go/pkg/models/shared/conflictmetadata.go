package shared

// ConflictMetadata
// Information about the metadata for a conflict in a merge operation.
type ConflictMetadata struct {
	ContentConflict    *bool            `json:"contentConflict,omitempty"`
	FileModeConflict   *bool            `json:"fileModeConflict,omitempty"`
	FileModes          *FileModes       `json:"fileModes,omitempty"`
	FilePath           *string          `json:"filePath,omitempty"`
	FileSizes          *FileSizes       `json:"fileSizes,omitempty"`
	IsBinaryFile       *IsBinaryFile    `json:"isBinaryFile,omitempty"`
	MergeOperations    *MergeOperations `json:"mergeOperations,omitempty"`
	NumberOfConflicts  *int64           `json:"numberOfConflicts,omitempty"`
	ObjectTypeConflict *bool            `json:"objectTypeConflict,omitempty"`
	ObjectTypes        *ObjectTypes     `json:"objectTypes,omitempty"`
}
