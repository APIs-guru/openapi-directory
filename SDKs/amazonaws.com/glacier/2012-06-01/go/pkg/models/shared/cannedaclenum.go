package shared




type CannedACLEnum string

const (
    CannedACLEnumPrivate CannedACLEnum = "private"
CannedACLEnumPublicRead CannedACLEnum = "public-read"
CannedACLEnumPublicReadWrite CannedACLEnum = "public-read-write"
CannedACLEnumAwsExecRead CannedACLEnum = "aws-exec-read"
CannedACLEnumAuthenticatedRead CannedACLEnum = "authenticated-read"
CannedACLEnumBucketOwnerRead CannedACLEnum = "bucket-owner-read"
CannedACLEnumBucketOwnerFullControl CannedACLEnum = "bucket-owner-full-control"
)


