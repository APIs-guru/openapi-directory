package shared

type ConflictMetadata struct {
	ContentConflict    *bool            `json:"contentConflict"`
	FileModeConflict   *bool            `json:"fileModeConflict"`
	FileModes          *FileModes       `json:"fileModes"`
	FilePath           *string          `json:"filePath"`
	FileSizes          *FileSizes       `json:"fileSizes"`
	IsBinaryFile       *IsBinaryFile    `json:"isBinaryFile"`
	MergeOperations    *MergeOperations `json:"mergeOperations"`
	NumberOfConflicts  *int64           `json:"numberOfConflicts"`
	ObjectTypeConflict *bool            `json:"objectTypeConflict"`
	ObjectTypes        *ObjectTypes     `json:"objectTypes"`
}
