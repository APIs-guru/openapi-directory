package shared

type ServerTypeEnum string

const (
	ServerTypeEnumGithub           ServerTypeEnum = "GITHUB"
	ServerTypeEnumBitbucket        ServerTypeEnum = "BITBUCKET"
	ServerTypeEnumGithubEnterprise ServerTypeEnum = "GITHUB_ENTERPRISE"
)
