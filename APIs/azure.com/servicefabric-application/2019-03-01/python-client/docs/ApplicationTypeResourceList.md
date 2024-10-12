# ApplicationTypeResourceList

The list of application type names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of application type list results if there are any. | [optional] [readonly] 
**value** | [**List[ApplicationTypeResource]**](ApplicationTypeResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_type_resource_list import ApplicationTypeResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeResourceList from a JSON string
application_type_resource_list_instance = ApplicationTypeResourceList.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeResourceList.to_json())

# convert the object into a dict
application_type_resource_list_dict = application_type_resource_list_instance.to_dict()
# create an instance of ApplicationTypeResourceList from a dict
application_type_resource_list_from_dict = ApplicationTypeResourceList.from_dict(application_type_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


