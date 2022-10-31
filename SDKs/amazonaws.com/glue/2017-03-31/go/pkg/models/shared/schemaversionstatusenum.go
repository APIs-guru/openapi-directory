package shared




type SchemaVersionStatusEnum string

const (
    SchemaVersionStatusEnumAvailable SchemaVersionStatusEnum = "AVAILABLE"
SchemaVersionStatusEnumPending SchemaVersionStatusEnum = "PENDING"
SchemaVersionStatusEnumFailure SchemaVersionStatusEnum = "FAILURE"
SchemaVersionStatusEnumDeleting SchemaVersionStatusEnum = "DELETING"
)


