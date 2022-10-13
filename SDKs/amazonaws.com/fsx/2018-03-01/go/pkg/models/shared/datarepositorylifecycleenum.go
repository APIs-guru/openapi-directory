package shared

type DataRepositoryLifecycleEnum string

const (
	DataRepositoryLifecycleEnumCreating      DataRepositoryLifecycleEnum = "CREATING"
	DataRepositoryLifecycleEnumAvailable     DataRepositoryLifecycleEnum = "AVAILABLE"
	DataRepositoryLifecycleEnumMisconfigured DataRepositoryLifecycleEnum = "MISCONFIGURED"
	DataRepositoryLifecycleEnumUpdating      DataRepositoryLifecycleEnum = "UPDATING"
	DataRepositoryLifecycleEnumDeleting      DataRepositoryLifecycleEnum = "DELETING"
)
