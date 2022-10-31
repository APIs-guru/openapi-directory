package shared




type ResourceTypeEnum string

const (
    ResourceTypeEnumDeviceCertificate ResourceTypeEnum = "DEVICE_CERTIFICATE"
ResourceTypeEnumCaCertificate ResourceTypeEnum = "CA_CERTIFICATE"
ResourceTypeEnumIotPolicy ResourceTypeEnum = "IOT_POLICY"
ResourceTypeEnumCognitoIdentityPool ResourceTypeEnum = "COGNITO_IDENTITY_POOL"
ResourceTypeEnumClientID ResourceTypeEnum = "CLIENT_ID"
ResourceTypeEnumAccountSettings ResourceTypeEnum = "ACCOUNT_SETTINGS"
ResourceTypeEnumRoleAlias ResourceTypeEnum = "ROLE_ALIAS"
ResourceTypeEnumIamRole ResourceTypeEnum = "IAM_ROLE"
)


