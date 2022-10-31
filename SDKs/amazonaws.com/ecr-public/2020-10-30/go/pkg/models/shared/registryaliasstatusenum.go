package shared

type RegistryAliasStatusEnum string

const (
	RegistryAliasStatusEnumActive   RegistryAliasStatusEnum = "ACTIVE"
	RegistryAliasStatusEnumPending  RegistryAliasStatusEnum = "PENDING"
	RegistryAliasStatusEnumRejected RegistryAliasStatusEnum = "REJECTED"
)
