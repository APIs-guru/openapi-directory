# JobDebugRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airbyte_version** | **str** |  | 
**config_id** | **str** |  | 
**config_type** | [**JobConfigType**](JobConfigType.md) |  | 
**destination_definition** | [**DestinationDefinitionRead**](DestinationDefinitionRead.md) |  | 
**id** | **int** |  | 
**source_definition** | [**SourceDefinitionRead**](SourceDefinitionRead.md) |  | 
**status** | [**JobStatus**](JobStatus.md) |  | 

## Example

```python
from openapi_client.models.job_debug_read import JobDebugRead

# TODO update the JSON string below
json = "{}"
# create an instance of JobDebugRead from a JSON string
job_debug_read_instance = JobDebugRead.from_json(json)
# print the JSON string representation of the object
print(JobDebugRead.to_json())

# convert the object into a dict
job_debug_read_dict = job_debug_read_instance.to_dict()
# create an instance of JobDebugRead from a dict
job_debug_read_from_dict = JobDebugRead.from_dict(job_debug_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


