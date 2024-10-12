# VersionResourceList

The list of version resources for the specified application type name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[VersionResource]**](VersionResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.version_resource_list import VersionResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of VersionResourceList from a JSON string
version_resource_list_instance = VersionResourceList.from_json(json)
# print the JSON string representation of the object
print(VersionResourceList.to_json())

# convert the object into a dict
version_resource_list_dict = version_resource_list_instance.to_dict()
# create an instance of VersionResourceList from a dict
version_resource_list_from_dict = VersionResourceList.from_dict(version_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


