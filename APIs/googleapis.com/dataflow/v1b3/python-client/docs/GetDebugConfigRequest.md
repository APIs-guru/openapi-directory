# GetDebugConfigRequest

Request to get updated debug configuration for component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_id** | **str** | The internal component id for which debug configuration is requested. | [optional] 
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. | [optional] 
**worker_id** | **str** | The worker id, i.e., VM hostname. | [optional] 

## Example

```python
from openapi_client.models.get_debug_config_request import GetDebugConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetDebugConfigRequest from a JSON string
get_debug_config_request_instance = GetDebugConfigRequest.from_json(json)
# print the JSON string representation of the object
print(GetDebugConfigRequest.to_json())

# convert the object into a dict
get_debug_config_request_dict = get_debug_config_request_instance.to_dict()
# create an instance of GetDebugConfigRequest from a dict
get_debug_config_request_from_dict = GetDebugConfigRequest.from_dict(get_debug_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


