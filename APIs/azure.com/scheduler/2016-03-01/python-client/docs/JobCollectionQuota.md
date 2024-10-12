# JobCollectionQuota


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_job_count** | **int** | Gets or set the maximum job count. | [optional] 
**max_job_occurrence** | **int** | Gets or sets the maximum job occurrence. | [optional] 
**max_recurrence** | [**JobMaxRecurrence**](JobMaxRecurrence.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_collection_quota import JobCollectionQuota

# TODO update the JSON string below
json = "{}"
# create an instance of JobCollectionQuota from a JSON string
job_collection_quota_instance = JobCollectionQuota.from_json(json)
# print the JSON string representation of the object
print(JobCollectionQuota.to_json())

# convert the object into a dict
job_collection_quota_dict = job_collection_quota_instance.to_dict()
# create an instance of JobCollectionQuota from a dict
job_collection_quota_from_dict = JobCollectionQuota.from_dict(job_collection_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


