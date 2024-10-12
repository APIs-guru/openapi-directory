# OnTaskFailure

A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction.

## Enum

* `NOACTION` (value: `'noaction'`)

* `PERFORMEXITOPTIONSJOBACTION` (value: `'performexitoptionsjobaction'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


