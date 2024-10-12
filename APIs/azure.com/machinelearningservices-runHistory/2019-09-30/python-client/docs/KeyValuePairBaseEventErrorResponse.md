# KeyValuePairBaseEventErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**BaseEvent**](BaseEvent.md) |  | [optional] 
**value** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.key_value_pair_base_event_error_response import KeyValuePairBaseEventErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValuePairBaseEventErrorResponse from a JSON string
key_value_pair_base_event_error_response_instance = KeyValuePairBaseEventErrorResponse.from_json(json)
# print the JSON string representation of the object
print(KeyValuePairBaseEventErrorResponse.to_json())

# convert the object into a dict
key_value_pair_base_event_error_response_dict = key_value_pair_base_event_error_response_instance.to_dict()
# create an instance of KeyValuePairBaseEventErrorResponse from a dict
key_value_pair_base_event_error_response_from_dict = KeyValuePairBaseEventErrorResponse.from_dict(key_value_pair_base_event_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


