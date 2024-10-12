# LinkedServiceDebugResource

Linked service debug resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource. | 
**name** | **str** | The resource name. | [optional] 

## Example

```python
from openapi_client.models.linked_service_debug_resource import LinkedServiceDebugResource

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedServiceDebugResource from a JSON string
linked_service_debug_resource_instance = LinkedServiceDebugResource.from_json(json)
# print the JSON string representation of the object
print(LinkedServiceDebugResource.to_json())

# convert the object into a dict
linked_service_debug_resource_dict = linked_service_debug_resource_instance.to_dict()
# create an instance of LinkedServiceDebugResource from a dict
linked_service_debug_resource_from_dict = LinkedServiceDebugResource.from_dict(linked_service_debug_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


