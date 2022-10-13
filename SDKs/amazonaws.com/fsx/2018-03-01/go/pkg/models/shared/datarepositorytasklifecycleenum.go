package shared

type DataRepositoryTaskLifecycleEnum string

const (
	DataRepositoryTaskLifecycleEnumPending   DataRepositoryTaskLifecycleEnum = "PENDING"
	DataRepositoryTaskLifecycleEnumExecuting DataRepositoryTaskLifecycleEnum = "EXECUTING"
	DataRepositoryTaskLifecycleEnumFailed    DataRepositoryTaskLifecycleEnum = "FAILED"
	DataRepositoryTaskLifecycleEnumSucceeded DataRepositoryTaskLifecycleEnum = "SUCCEEDED"
	DataRepositoryTaskLifecycleEnumCanceled  DataRepositoryTaskLifecycleEnum = "CANCELED"
	DataRepositoryTaskLifecycleEnumCanceling DataRepositoryTaskLifecycleEnum = "CANCELING"
)
