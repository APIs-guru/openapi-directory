# LinkedServiceResource

Linked service resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource. | 
**etag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_service_resource import LinkedServiceResource

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedServiceResource from a JSON string
linked_service_resource_instance = LinkedServiceResource.from_json(json)
# print the JSON string representation of the object
print(LinkedServiceResource.to_json())

# convert the object into a dict
linked_service_resource_dict = linked_service_resource_instance.to_dict()
# create an instance of LinkedServiceResource from a dict
linked_service_resource_from_dict = LinkedServiceResource.from_dict(linked_service_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


