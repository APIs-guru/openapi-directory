# ServiceResourceDescriptionList

A pageable list of service resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[ServiceResourceDescription]**](ServiceResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.service_resource_description_list import ServiceResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResourceDescriptionList from a JSON string
service_resource_description_list_instance = ServiceResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(ServiceResourceDescriptionList.to_json())

# convert the object into a dict
service_resource_description_list_dict = service_resource_description_list_instance.to_dict()
# create an instance of ServiceResourceDescriptionList from a dict
service_resource_description_list_from_dict = ServiceResourceDescriptionList.from_dict(service_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


