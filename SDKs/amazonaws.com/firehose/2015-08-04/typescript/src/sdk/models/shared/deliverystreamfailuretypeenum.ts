

export enum DeliveryStreamFailureTypeEnum {
    RetireKmsGrantFailed = "RETIRE_KMS_GRANT_FAILED"
,    CreateKmsGrantFailed = "CREATE_KMS_GRANT_FAILED"
,    KmsAccessDenied = "KMS_ACCESS_DENIED"
,    DisabledKmsKey = "DISABLED_KMS_KEY"
,    InvalidKmsKey = "INVALID_KMS_KEY"
,    KmsKeyNotFound = "KMS_KEY_NOT_FOUND"
,    KmsOptInRequired = "KMS_OPT_IN_REQUIRED"
,    CreateEniFailed = "CREATE_ENI_FAILED"
,    DeleteEniFailed = "DELETE_ENI_FAILED"
,    SubnetNotFound = "SUBNET_NOT_FOUND"
,    SecurityGroupNotFound = "SECURITY_GROUP_NOT_FOUND"
,    EniAccessDenied = "ENI_ACCESS_DENIED"
,    SubnetAccessDenied = "SUBNET_ACCESS_DENIED"
,    SecurityGroupAccessDenied = "SECURITY_GROUP_ACCESS_DENIED"
,    UnknownError = "UNKNOWN_ERROR"
}
