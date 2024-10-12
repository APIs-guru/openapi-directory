# LinkedServiceProperties

Linked service properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | The resource id of the resource that will be linked to the workspace. | 

## Example

```python
from openapi_client.models.linked_service_properties import LinkedServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedServiceProperties from a JSON string
linked_service_properties_instance = LinkedServiceProperties.from_json(json)
# print the JSON string representation of the object
print(LinkedServiceProperties.to_json())

# convert the object into a dict
linked_service_properties_dict = linked_service_properties_instance.to_dict()
# create an instance of LinkedServiceProperties from a dict
linked_service_properties_from_dict = LinkedServiceProperties.from_dict(linked_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


