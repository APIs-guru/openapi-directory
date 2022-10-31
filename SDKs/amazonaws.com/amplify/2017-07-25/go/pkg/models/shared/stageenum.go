package shared

type StageEnum string

const (
	StageEnumProduction   StageEnum = "PRODUCTION"
	StageEnumBeta         StageEnum = "BETA"
	StageEnumDevelopment  StageEnum = "DEVELOPMENT"
	StageEnumExperimental StageEnum = "EXPERIMENTAL"
	StageEnumPullRequest  StageEnum = "PULL_REQUEST"
)
