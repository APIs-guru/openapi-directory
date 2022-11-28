package shared

// SourceBuildInformation
// Location of the source code for an application version.
type SourceBuildInformation struct {
	SourceLocation   string
	SourceRepository SourceRepositoryEnum
	SourceType       SourceTypeEnum
}
