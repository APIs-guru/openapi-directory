package shared

type AdministrativeActionTypeEnum string

const (
	AdministrativeActionTypeEnumFileSystemUpdate              AdministrativeActionTypeEnum = "FILE_SYSTEM_UPDATE"
	AdministrativeActionTypeEnumStorageOptimization           AdministrativeActionTypeEnum = "STORAGE_OPTIMIZATION"
	AdministrativeActionTypeEnumFileSystemAliasAssociation    AdministrativeActionTypeEnum = "FILE_SYSTEM_ALIAS_ASSOCIATION"
	AdministrativeActionTypeEnumFileSystemAliasDisassociation AdministrativeActionTypeEnum = "FILE_SYSTEM_ALIAS_DISASSOCIATION"
)
