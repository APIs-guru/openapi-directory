# LinkedServiceReference

Linked service reference type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, object]** | An object mapping parameter names to argument values. | [optional] 
**reference_name** | **str** | Reference LinkedService name. | 
**type** | **str** | Linked service reference type. | 

## Example

```python
from openapi_client.models.linked_service_reference import LinkedServiceReference

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedServiceReference from a JSON string
linked_service_reference_instance = LinkedServiceReference.from_json(json)
# print the JSON string representation of the object
print(LinkedServiceReference.to_json())

# convert the object into a dict
linked_service_reference_dict = linked_service_reference_instance.to_dict()
# create an instance of LinkedServiceReference from a dict
linked_service_reference_from_dict = LinkedServiceReference.from_dict(linked_service_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


