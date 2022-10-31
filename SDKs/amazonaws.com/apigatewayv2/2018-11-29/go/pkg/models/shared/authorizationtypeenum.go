package shared




type AuthorizationTypeEnum string

const (
    AuthorizationTypeEnumNone AuthorizationTypeEnum = "NONE"
AuthorizationTypeEnumAwsIam AuthorizationTypeEnum = "AWS_IAM"
AuthorizationTypeEnumCustom AuthorizationTypeEnum = "CUSTOM"
AuthorizationTypeEnumJwt AuthorizationTypeEnum = "JWT"
)


