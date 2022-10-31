package shared

type AliasLifecycleEnum string

const (
	AliasLifecycleEnumAvailable    AliasLifecycleEnum = "AVAILABLE"
	AliasLifecycleEnumCreating     AliasLifecycleEnum = "CREATING"
	AliasLifecycleEnumDeleting     AliasLifecycleEnum = "DELETING"
	AliasLifecycleEnumCreateFailed AliasLifecycleEnum = "CREATE_FAILED"
	AliasLifecycleEnumDeleteFailed AliasLifecycleEnum = "DELETE_FAILED"
)
