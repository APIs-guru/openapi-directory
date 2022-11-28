package shared

// SourceCodeVersion
// Identifies a version of code that AWS App Runner refers to within a source code repository.
type SourceCodeVersion struct {
	Type  SourceCodeVersionTypeEnum `json:"Type"`
	Value string                    `json:"Value"`
}
