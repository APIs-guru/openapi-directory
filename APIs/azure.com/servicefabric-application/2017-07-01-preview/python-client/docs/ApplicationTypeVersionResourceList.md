# ApplicationTypeVersionResourceList

The list of application type version resources for the specified application type name resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ApplicationTypeVersionResource]**](ApplicationTypeVersionResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_type_version_resource_list import ApplicationTypeVersionResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeVersionResourceList from a JSON string
application_type_version_resource_list_instance = ApplicationTypeVersionResourceList.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeVersionResourceList.to_json())

# convert the object into a dict
application_type_version_resource_list_dict = application_type_version_resource_list_instance.to_dict()
# create an instance of ApplicationTypeVersionResourceList from a dict
application_type_version_resource_list_from_dict = ApplicationTypeVersionResourceList.from_dict(application_type_version_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


