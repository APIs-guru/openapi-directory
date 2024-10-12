# GenericClassAddMessageResponse

Response to adding a new issuer message to the class. This contains the entire updated GenericClass.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**GenericClass**](GenericClass.md) |  | [optional] 

## Example

```python
from openapi_client.models.generic_class_add_message_response import GenericClassAddMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenericClassAddMessageResponse from a JSON string
generic_class_add_message_response_instance = GenericClassAddMessageResponse.from_json(json)
# print the JSON string representation of the object
print(GenericClassAddMessageResponse.to_json())

# convert the object into a dict
generic_class_add_message_response_dict = generic_class_add_message_response_instance.to_dict()
# create an instance of GenericClassAddMessageResponse from a dict
generic_class_add_message_response_from_dict = GenericClassAddMessageResponse.from_dict(generic_class_add_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


