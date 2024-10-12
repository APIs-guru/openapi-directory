# GenericObjectAddMessageResponse

Response to adding a new issuer message to the object. This contains the entire updated GenericObject.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**GenericObject**](GenericObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.generic_object_add_message_response import GenericObjectAddMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenericObjectAddMessageResponse from a JSON string
generic_object_add_message_response_instance = GenericObjectAddMessageResponse.from_json(json)
# print the JSON string representation of the object
print(GenericObjectAddMessageResponse.to_json())

# convert the object into a dict
generic_object_add_message_response_dict = generic_object_add_message_response_instance.to_dict()
# create an instance of GenericObjectAddMessageResponse from a dict
generic_object_add_message_response_from_dict = GenericObjectAddMessageResponse.from_dict(generic_object_add_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


