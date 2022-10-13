package shared

type SourceTypeEnum string

const (
	SourceTypeEnumCodecommit       SourceTypeEnum = "CODECOMMIT"
	SourceTypeEnumCodepipeline     SourceTypeEnum = "CODEPIPELINE"
	SourceTypeEnumGithub           SourceTypeEnum = "GITHUB"
	SourceTypeEnumS3               SourceTypeEnum = "S3"
	SourceTypeEnumBitbucket        SourceTypeEnum = "BITBUCKET"
	SourceTypeEnumGithubEnterprise SourceTypeEnum = "GITHUB_ENTERPRISE"
	SourceTypeEnumNoSource         SourceTypeEnum = "NO_SOURCE"
)
