package shared

type SourceRepositoryEnum string

const (
	SourceRepositoryEnumCodeCommit SourceRepositoryEnum = "CodeCommit"
	SourceRepositoryEnumS3         SourceRepositoryEnum = "S3"
)
