# DeallocationOption

Actions which should be performed when compute nodes are removed from the cluster. Possible values are: requeue (default) - Terminate running jobs and requeue them so the jobs will run again. Remove compute nodes as soon as jobs have been terminated; terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. waitforjobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed.

## Enum

* `REQUEUE` (value: `'requeue'`)

* `TERMINATE` (value: `'terminate'`)

* `WAITFORJOBCOMPLETION` (value: `'waitforjobcompletion'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


