# ServiceResourceList

The list of service resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of service list results if there are any. | [optional] [readonly] 
**value** | [**List[ServiceResource]**](ServiceResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_resource_list import ServiceResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResourceList from a JSON string
service_resource_list_instance = ServiceResourceList.from_json(json)
# print the JSON string representation of the object
print(ServiceResourceList.to_json())

# convert the object into a dict
service_resource_list_dict = service_resource_list_instance.to_dict()
# create an instance of ServiceResourceList from a dict
service_resource_list_from_dict = ServiceResourceList.from_dict(service_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


