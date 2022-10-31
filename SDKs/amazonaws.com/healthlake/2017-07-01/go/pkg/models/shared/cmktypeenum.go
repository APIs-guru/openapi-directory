package shared

type CmkTypeEnum string

const (
	CmkTypeEnumCustomerManagedKmsKey CmkTypeEnum = "CUSTOMER_MANAGED_KMS_KEY"
	CmkTypeEnumAwsOwnedKmsKey        CmkTypeEnum = "AWS_OWNED_KMS_KEY"
)
