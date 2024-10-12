# AppPatch

The description of the IoT Central application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppProperties**](AppProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Instance tags | [optional] 

## Example

```python
from openapi_client.models.app_patch import AppPatch

# TODO update the JSON string below
json = "{}"
# create an instance of AppPatch from a JSON string
app_patch_instance = AppPatch.from_json(json)
# print the JSON string representation of the object
print(AppPatch.to_json())

# convert the object into a dict
app_patch_dict = app_patch_instance.to_dict()
# create an instance of AppPatch from a dict
app_patch_from_dict = AppPatch.from_dict(app_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


