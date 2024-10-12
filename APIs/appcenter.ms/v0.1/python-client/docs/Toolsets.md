# Toolsets

Set of toolsets available for app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node** | [**List[BuildsListToolsets200ResponseNodeInner]**](BuildsListToolsets200ResponseNodeInner.md) | A list of Node versions | [optional] 
**xamarin** | [**List[BuildsListToolsets200ResponseXamarinInner]**](BuildsListToolsets200ResponseXamarinInner.md) | A list of Xamarin SDK bundles | [optional] 
**xcode** | [**List[BuildsListToolsets200ResponseXcodeInner]**](BuildsListToolsets200ResponseXcodeInner.md) | A list of Xcode versions | [optional] 

## Example

```python
from openapi_client.models.toolsets import Toolsets

# TODO update the JSON string below
json = "{}"
# create an instance of Toolsets from a JSON string
toolsets_instance = Toolsets.from_json(json)
# print the JSON string representation of the object
print(Toolsets.to_json())

# convert the object into a dict
toolsets_dict = toolsets_instance.to_dict()
# create an instance of Toolsets from a dict
toolsets_from_dict = Toolsets.from_dict(toolsets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


