package shared

type FindingSourceTypeEnum string

const (
	FindingSourceTypeEnumPolicy        FindingSourceTypeEnum = "POLICY"
	FindingSourceTypeEnumBucketACL     FindingSourceTypeEnum = "BUCKET_ACL"
	FindingSourceTypeEnumS3AccessPoint FindingSourceTypeEnum = "S3_ACCESS_POINT"
)
