# UWPToolset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uwp_solutions** | [**List[BuildsListToolsetProjects200ResponseUwpUwpSolutionsInner]**](BuildsListToolsetProjects200ResponseUwpUwpSolutionsInner.md) | The UWP solutions detected | 

## Example

```python
from openapi_client.models.uwp_toolset import UWPToolset

# TODO update the JSON string below
json = "{}"
# create an instance of UWPToolset from a JSON string
uwp_toolset_instance = UWPToolset.from_json(json)
# print the JSON string representation of the object
print(UWPToolset.to_json())

# convert the object into a dict
uwp_toolset_dict = uwp_toolset_instance.to_dict()
# create an instance of UWPToolset from a dict
uwp_toolset_from_dict = UWPToolset.from_dict(uwp_toolset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


