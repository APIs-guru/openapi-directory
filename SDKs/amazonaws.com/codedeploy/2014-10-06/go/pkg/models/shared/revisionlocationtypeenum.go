package shared




type RevisionLocationTypeEnum string

const (
    RevisionLocationTypeEnumS3 RevisionLocationTypeEnum = "S3"
RevisionLocationTypeEnumGitHub RevisionLocationTypeEnum = "GitHub"
RevisionLocationTypeEnumString RevisionLocationTypeEnum = "String"
RevisionLocationTypeEnumAppSpecContent RevisionLocationTypeEnum = "AppSpecContent"
)


