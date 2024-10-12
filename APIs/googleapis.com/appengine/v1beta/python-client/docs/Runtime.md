# Runtime

Runtime versions for App Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decommissioned_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**deprecation_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**display_name** | **str** | User-friendly display name, e.g. &#39;Node.js 12&#39;, etc. | [optional] 
**end_of_support_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**environment** | **str** | The environment of the runtime. | [optional] 
**name** | **str** | The name of the runtime, e.g., &#39;go113&#39;, &#39;nodejs12&#39;, etc. | [optional] 
**stage** | **str** | The stage of life this runtime is in, e.g., BETA, GA, etc. | [optional] 
**supported_operating_systems** | **List[str]** | Supported operating systems for the runtime, e.g., &#39;ubuntu22&#39;, etc. | [optional] 
**warnings** | **List[str]** | Warning messages, e.g., a deprecation warning. | [optional] 

## Example

```python
from openapi_client.models.runtime import Runtime

# TODO update the JSON string below
json = "{}"
# create an instance of Runtime from a JSON string
runtime_instance = Runtime.from_json(json)
# print the JSON string representation of the object
print(Runtime.to_json())

# convert the object into a dict
runtime_dict = runtime_instance.to_dict()
# create an instance of Runtime from a dict
runtime_from_dict = Runtime.from_dict(runtime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


