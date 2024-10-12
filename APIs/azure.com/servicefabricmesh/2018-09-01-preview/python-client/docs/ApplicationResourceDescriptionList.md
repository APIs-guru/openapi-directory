# ApplicationResourceDescriptionList

A pageable list of application resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[ApplicationResourceDescription]**](ApplicationResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.application_resource_description_list import ApplicationResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationResourceDescriptionList from a JSON string
application_resource_description_list_instance = ApplicationResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(ApplicationResourceDescriptionList.to_json())

# convert the object into a dict
application_resource_description_list_dict = application_resource_description_list_instance.to_dict()
# create an instance of ApplicationResourceDescriptionList from a dict
application_resource_description_list_from_dict = ApplicationResourceDescriptionList.from_dict(application_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


