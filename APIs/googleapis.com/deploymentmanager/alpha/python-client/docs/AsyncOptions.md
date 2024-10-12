# AsyncOptions

Async options that determine when a resource should finish.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method_match** | **str** | Method regex where this policy will apply. | [optional] 
**polling_options** | [**PollingOptions**](PollingOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.async_options import AsyncOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncOptions from a JSON string
async_options_instance = AsyncOptions.from_json(json)
# print the JSON string representation of the object
print(AsyncOptions.to_json())

# convert the object into a dict
async_options_dict = async_options_instance.to_dict()
# create an instance of AsyncOptions from a dict
async_options_from_dict = AsyncOptions.from_dict(async_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


