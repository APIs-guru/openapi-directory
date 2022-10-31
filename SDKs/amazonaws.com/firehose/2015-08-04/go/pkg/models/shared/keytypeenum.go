package shared

type KeyTypeEnum string

const (
	KeyTypeEnumAwsOwnedCmk        KeyTypeEnum = "AWS_OWNED_CMK"
	KeyTypeEnumCustomerManagedCmk KeyTypeEnum = "CUSTOMER_MANAGED_CMK"
)
