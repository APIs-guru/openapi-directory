package shared




type SourceTypeEnum string

const (
    SourceTypeEnumAwsCloudtrail SourceTypeEnum = "AWS_Cloudtrail"
SourceTypeEnumAwsConfig SourceTypeEnum = "AWS_Config"
SourceTypeEnumAwsSecurityHub SourceTypeEnum = "AWS_Security_Hub"
SourceTypeEnumAwsAPICall SourceTypeEnum = "AWS_API_Call"
SourceTypeEnumManual SourceTypeEnum = "MANUAL"
)


