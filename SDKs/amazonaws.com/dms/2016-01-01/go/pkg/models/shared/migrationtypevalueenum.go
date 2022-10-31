package shared

type MigrationTypeValueEnum string

const (
	MigrationTypeValueEnumFullLoad       MigrationTypeValueEnum = "full-load"
	MigrationTypeValueEnumCdc            MigrationTypeValueEnum = "cdc"
	MigrationTypeValueEnumFullLoadAndCdc MigrationTypeValueEnum = "full-load-and-cdc"
)
