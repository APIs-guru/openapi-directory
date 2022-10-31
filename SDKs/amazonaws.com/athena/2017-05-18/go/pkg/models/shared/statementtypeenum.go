package shared

type StatementTypeEnum string

const (
	StatementTypeEnumDdl     StatementTypeEnum = "DDL"
	StatementTypeEnumDml     StatementTypeEnum = "DML"
	StatementTypeEnumUtility StatementTypeEnum = "UTILITY"
)
