package shared




type S3StorageClassEnum string

const (
    S3StorageClassEnumStandard S3StorageClassEnum = "STANDARD"
S3StorageClassEnumStandardIa S3StorageClassEnum = "STANDARD_IA"
S3StorageClassEnumOnezoneIa S3StorageClassEnum = "ONEZONE_IA"
S3StorageClassEnumIntelligentTiering S3StorageClassEnum = "INTELLIGENT_TIERING"
S3StorageClassEnumGlacier S3StorageClassEnum = "GLACIER"
S3StorageClassEnumDeepArchive S3StorageClassEnum = "DEEP_ARCHIVE"
S3StorageClassEnumOutposts S3StorageClassEnum = "OUTPOSTS"
)


