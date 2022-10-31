package shared




type CannedAccessControlListEnum string

const (
    CannedAccessControlListEnumPrivate CannedAccessControlListEnum = "private"
CannedAccessControlListEnumPublicRead CannedAccessControlListEnum = "public-read"
CannedAccessControlListEnumPublicReadWrite CannedAccessControlListEnum = "public-read-write"
CannedAccessControlListEnumAwsExecRead CannedAccessControlListEnum = "aws-exec-read"
CannedAccessControlListEnumAuthenticatedRead CannedAccessControlListEnum = "authenticated-read"
CannedAccessControlListEnumBucketOwnerRead CannedAccessControlListEnum = "bucket-owner-read"
CannedAccessControlListEnumBucketOwnerFullControl CannedAccessControlListEnum = "bucket-owner-full-control"
CannedAccessControlListEnumLogDeliveryWrite CannedAccessControlListEnum = "log-delivery-write"
)


