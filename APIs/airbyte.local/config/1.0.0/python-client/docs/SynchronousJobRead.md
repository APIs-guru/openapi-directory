# SynchronousJobRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_id** | **str** | only present if a config id was provided. | [optional] 
**config_type** | [**JobConfigType**](JobConfigType.md) |  | 
**connector_configuration_updated** | **bool** |  | [optional] [default to False]
**created_at** | **int** |  | 
**ended_at** | **int** |  | 
**id** | **str** |  | 
**logs** | [**LogRead**](LogRead.md) |  | [optional] 
**succeeded** | **bool** |  | 

## Example

```python
from openapi_client.models.synchronous_job_read import SynchronousJobRead

# TODO update the JSON string below
json = "{}"
# create an instance of SynchronousJobRead from a JSON string
synchronous_job_read_instance = SynchronousJobRead.from_json(json)
# print the JSON string representation of the object
print(SynchronousJobRead.to_json())

# convert the object into a dict
synchronous_job_read_dict = synchronous_job_read_instance.to_dict()
# create an instance of SynchronousJobRead from a dict
synchronous_job_read_from_dict = SynchronousJobRead.from_dict(synchronous_job_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


