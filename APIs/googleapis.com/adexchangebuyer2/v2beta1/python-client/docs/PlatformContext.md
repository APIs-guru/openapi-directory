# PlatformContext

Output only. The type of platform the restriction applies to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platforms** | **List[str]** | The platforms this restriction applies to. | [optional] 

## Example

```python
from openapi_client.models.platform_context import PlatformContext

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformContext from a JSON string
platform_context_instance = PlatformContext.from_json(json)
# print the JSON string representation of the object
print(PlatformContext.to_json())

# convert the object into a dict
platform_context_dict = platform_context_instance.to_dict()
# create an instance of PlatformContext from a dict
platform_context_from_dict = PlatformContext.from_dict(platform_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


