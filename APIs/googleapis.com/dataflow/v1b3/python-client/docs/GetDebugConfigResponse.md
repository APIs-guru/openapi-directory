# GetDebugConfigResponse

Response to a get debug configuration request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **str** | The encoded debug configuration for the requested component. | [optional] 

## Example

```python
from openapi_client.models.get_debug_config_response import GetDebugConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDebugConfigResponse from a JSON string
get_debug_config_response_instance = GetDebugConfigResponse.from_json(json)
# print the JSON string representation of the object
print(GetDebugConfigResponse.to_json())

# convert the object into a dict
get_debug_config_response_dict = get_debug_config_response_instance.to_dict()
# create an instance of GetDebugConfigResponse from a dict
get_debug_config_response_from_dict = GetDebugConfigResponse.from_dict(get_debug_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


