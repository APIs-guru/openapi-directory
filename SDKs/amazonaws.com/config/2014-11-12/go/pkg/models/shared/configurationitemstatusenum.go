package shared




type ConfigurationItemStatusEnum string

const (
    ConfigurationItemStatusEnumOk ConfigurationItemStatusEnum = "OK"
ConfigurationItemStatusEnumResourceDiscovered ConfigurationItemStatusEnum = "ResourceDiscovered"
ConfigurationItemStatusEnumResourceNotRecorded ConfigurationItemStatusEnum = "ResourceNotRecorded"
ConfigurationItemStatusEnumResourceDeleted ConfigurationItemStatusEnum = "ResourceDeleted"
ConfigurationItemStatusEnumResourceDeletedNotRecorded ConfigurationItemStatusEnum = "ResourceDeletedNotRecorded"
)


