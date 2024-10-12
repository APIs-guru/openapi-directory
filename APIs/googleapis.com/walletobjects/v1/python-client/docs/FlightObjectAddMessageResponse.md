# FlightObjectAddMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**FlightObject**](FlightObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.flight_object_add_message_response import FlightObjectAddMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FlightObjectAddMessageResponse from a JSON string
flight_object_add_message_response_instance = FlightObjectAddMessageResponse.from_json(json)
# print the JSON string representation of the object
print(FlightObjectAddMessageResponse.to_json())

# convert the object into a dict
flight_object_add_message_response_dict = flight_object_add_message_response_instance.to_dict()
# create an instance of FlightObjectAddMessageResponse from a dict
flight_object_add_message_response_from_dict = FlightObjectAddMessageResponse.from_dict(flight_object_add_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


