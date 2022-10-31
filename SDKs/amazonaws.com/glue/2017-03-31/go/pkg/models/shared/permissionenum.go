package shared

type PermissionEnum string

const (
	PermissionEnumAll                PermissionEnum = "ALL"
	PermissionEnumSelect             PermissionEnum = "SELECT"
	PermissionEnumAlter              PermissionEnum = "ALTER"
	PermissionEnumDrop               PermissionEnum = "DROP"
	PermissionEnumDelete             PermissionEnum = "DELETE"
	PermissionEnumInsert             PermissionEnum = "INSERT"
	PermissionEnumCreateDatabase     PermissionEnum = "CREATE_DATABASE"
	PermissionEnumCreateTable        PermissionEnum = "CREATE_TABLE"
	PermissionEnumDataLocationAccess PermissionEnum = "DATA_LOCATION_ACCESS"
)
