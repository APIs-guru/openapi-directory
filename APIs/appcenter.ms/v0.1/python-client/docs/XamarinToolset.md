# XamarinToolset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xamarin_solutions** | [**List[BuildsListToolsetProjects200ResponseXamarinXamarinSolutionsInner]**](BuildsListToolsetProjects200ResponseXamarinXamarinSolutionsInner.md) | Xamarin solutions for the toolset | 

## Example

```python
from openapi_client.models.xamarin_toolset import XamarinToolset

# TODO update the JSON string below
json = "{}"
# create an instance of XamarinToolset from a JSON string
xamarin_toolset_instance = XamarinToolset.from_json(json)
# print the JSON string representation of the object
print(XamarinToolset.to_json())

# convert the object into a dict
xamarin_toolset_dict = xamarin_toolset_instance.to_dict()
# create an instance of XamarinToolset from a dict
xamarin_toolset_from_dict = XamarinToolset.from_dict(xamarin_toolset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


