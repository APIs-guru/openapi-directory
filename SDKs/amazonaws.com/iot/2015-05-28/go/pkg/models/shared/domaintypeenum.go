package shared

type DomainTypeEnum string

const (
	DomainTypeEnumEndpoint        DomainTypeEnum = "ENDPOINT"
	DomainTypeEnumAwsManaged      DomainTypeEnum = "AWS_MANAGED"
	DomainTypeEnumCustomerManaged DomainTypeEnum = "CUSTOMER_MANAGED"
)
