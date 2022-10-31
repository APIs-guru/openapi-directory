package shared

type WriteOperationTypeEnum string

const (
	WriteOperationTypeEnumInsert WriteOperationTypeEnum = "INSERT"
	WriteOperationTypeEnumUpsert WriteOperationTypeEnum = "UPSERT"
	WriteOperationTypeEnumUpdate WriteOperationTypeEnum = "UPDATE"
)
