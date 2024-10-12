# TransitObjectAddMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**TransitObject**](TransitObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.transit_object_add_message_response import TransitObjectAddMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransitObjectAddMessageResponse from a JSON string
transit_object_add_message_response_instance = TransitObjectAddMessageResponse.from_json(json)
# print the JSON string representation of the object
print(TransitObjectAddMessageResponse.to_json())

# convert the object into a dict
transit_object_add_message_response_dict = transit_object_add_message_response_instance.to_dict()
# create an instance of TransitObjectAddMessageResponse from a dict
transit_object_add_message_response_from_dict = TransitObjectAddMessageResponse.from_dict(transit_object_add_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


