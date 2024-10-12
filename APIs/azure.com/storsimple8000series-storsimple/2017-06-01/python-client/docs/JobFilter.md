# JobFilter

The OData filter to be used for jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_type** | **str** | Specifies the type of the jobs to be filtered. For e.g., \&quot;ScheduledBackup\&quot;, \&quot;ManualBackup\&quot;, \&quot;RestoreBackup\&quot;, \&quot;CloneVolume\&quot;, \&quot;FailoverVolumeContainers\&quot;, \&quot;CreateLocallyPinnedVolume\&quot;, \&quot;ModifyVolume\&quot;, \&quot;InstallUpdates\&quot;, \&quot;SupportPackageLogs\&quot;, or \&quot;CreateCloudAppliance\&quot;. Only &#39;Equality&#39; operator can be used for this property. | [optional] 
**start_time** | **datetime** | Specifies the start time of the jobs to be filtered.  Only &#39;Greater Than or Equal To&#39; and &#39;Lesser Than or Equal To&#39; operators are supported for this property. | [optional] 
**status** | **str** | Specifies the status of the jobs to be filtered. For e.g., \&quot;Running\&quot;, \&quot;Succeeded\&quot;, \&quot;Failed\&quot; or \&quot;Canceled\&quot;. Only &#39;Equality&#39; operator is supported for this property. | [optional] 

## Example

```python
from openapi_client.models.job_filter import JobFilter

# TODO update the JSON string below
json = "{}"
# create an instance of JobFilter from a JSON string
job_filter_instance = JobFilter.from_json(json)
# print the JSON string representation of the object
print(JobFilter.to_json())

# convert the object into a dict
job_filter_dict = job_filter_instance.to_dict()
# create an instance of JobFilter from a dict
job_filter_from_dict = JobFilter.from_dict(job_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


