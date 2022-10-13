package shared

type ImageRepositoryTypeEnum string

const (
	ImageRepositoryTypeEnumEcr       ImageRepositoryTypeEnum = "ECR"
	ImageRepositoryTypeEnumEcrPublic ImageRepositoryTypeEnum = "ECR_PUBLIC"
)
