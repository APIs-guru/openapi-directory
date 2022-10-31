package shared

type SchemaStatusEnum string

const (
	SchemaStatusEnumProcessing    SchemaStatusEnum = "PROCESSING"
	SchemaStatusEnumActive        SchemaStatusEnum = "ACTIVE"
	SchemaStatusEnumDeleting      SchemaStatusEnum = "DELETING"
	SchemaStatusEnumFailed        SchemaStatusEnum = "FAILED"
	SchemaStatusEnumSuccess       SchemaStatusEnum = "SUCCESS"
	SchemaStatusEnumNotApplicable SchemaStatusEnum = "NOT_APPLICABLE"
)
