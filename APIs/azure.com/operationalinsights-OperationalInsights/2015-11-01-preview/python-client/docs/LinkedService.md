# LinkedService

The top level Linked service resource container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LinkedServiceProperties**](LinkedServiceProperties.md) |  | 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_service import LinkedService

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedService from a JSON string
linked_service_instance = LinkedService.from_json(json)
# print the JSON string representation of the object
print(LinkedService.to_json())

# convert the object into a dict
linked_service_dict = linked_service_instance.to_dict()
# create an instance of LinkedService from a dict
linked_service_from_dict = LinkedService.from_dict(linked_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


