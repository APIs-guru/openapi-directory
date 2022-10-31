package shared




type TableStatusEnum string

const (
    TableStatusEnumCreating TableStatusEnum = "CREATING"
TableStatusEnumUpdating TableStatusEnum = "UPDATING"
TableStatusEnumDeleting TableStatusEnum = "DELETING"
TableStatusEnumActive TableStatusEnum = "ACTIVE"
TableStatusEnumInaccessibleEncryptionCredentials TableStatusEnum = "INACCESSIBLE_ENCRYPTION_CREDENTIALS"
TableStatusEnumArchiving TableStatusEnum = "ARCHIVING"
TableStatusEnumArchived TableStatusEnum = "ARCHIVED"
)


