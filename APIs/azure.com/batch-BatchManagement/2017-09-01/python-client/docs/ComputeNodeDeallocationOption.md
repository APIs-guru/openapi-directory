# ComputeNodeDeallocationOption

Values are:   Requeue - Terminate running tasks and requeue them. The tasks will run again when the job is enabled. Remove nodes as soon as tasks have been terminated.  Terminate - Terminate running tasks. The tasks will not run again. Remove nodes as soon as tasks have been terminated.  TaskCompletion - Allow currently running tasks to complete. Schedule no new tasks while waiting. Remove nodes when all tasks have completed.  RetainedData - Allow currently running tasks to complete, then wait for all task data retention periods to expire. Schedule no new tasks while waiting. Remove nodes when all task retention periods have expired.

## Enum

* `REQUEUE` (value: `'Requeue'`)

* `TERMINATE` (value: `'Terminate'`)

* `TASKCOMPLETION` (value: `'TaskCompletion'`)

* `RETAINEDDATA` (value: `'RetainedData'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


