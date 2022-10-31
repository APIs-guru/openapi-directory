package shared




type ColumnNullableEnum string

const (
    ColumnNullableEnumNotNull ColumnNullableEnum = "NOT_NULL"
ColumnNullableEnumNullable ColumnNullableEnum = "NULLABLE"
ColumnNullableEnumUnknown ColumnNullableEnum = "UNKNOWN"
)


