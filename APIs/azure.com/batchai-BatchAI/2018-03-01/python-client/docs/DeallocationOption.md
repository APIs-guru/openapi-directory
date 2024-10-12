# DeallocationOption

Possible values are: requeue - Terminate running jobs and requeue them. The jobs will run again. Remove compute nodes as soon as jobs have been terminated. terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. jobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed. The default value is requeue.

## Enum

* `REQUEUE` (value: `'requeue'`)

* `TERMINATE` (value: `'terminate'`)

* `WAITFORJOBCOMPLETION` (value: `'waitforjobcompletion'`)

* `UNKNOWN` (value: `'unknown'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


