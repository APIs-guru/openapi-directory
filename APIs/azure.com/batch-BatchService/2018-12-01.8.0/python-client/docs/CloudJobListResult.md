# CloudJobListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[CloudJob]**](CloudJob.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_job_list_result import CloudJobListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudJobListResult from a JSON string
cloud_job_list_result_instance = CloudJobListResult.from_json(json)
# print the JSON string representation of the object
print(CloudJobListResult.to_json())

# convert the object into a dict
cloud_job_list_result_dict = cloud_job_list_result_instance.to_dict()
# create an instance of CloudJobListResult from a dict
cloud_job_list_result_from_dict = CloudJobListResult.from_dict(cloud_job_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


