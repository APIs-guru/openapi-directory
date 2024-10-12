# ApplicationResourceList

The list of application resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ApplicationResource]**](ApplicationResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_resource_list import ApplicationResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationResourceList from a JSON string
application_resource_list_instance = ApplicationResourceList.from_json(json)
# print the JSON string representation of the object
print(ApplicationResourceList.to_json())

# convert the object into a dict
application_resource_list_dict = application_resource_list_instance.to_dict()
# create an instance of ApplicationResourceList from a dict
application_resource_list_from_dict = ApplicationResourceList.from_dict(application_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


