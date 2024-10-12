# EventHubConnectionValidation

Class representing an event hub connection validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventhub_connection_name** | **str** | The name of the event hub connection. | [optional] 
**properties** | [**EventHubConnectionProperties**](EventHubConnectionProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_hub_connection_validation import EventHubConnectionValidation

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConnectionValidation from a JSON string
event_hub_connection_validation_instance = EventHubConnectionValidation.from_json(json)
# print the JSON string representation of the object
print(EventHubConnectionValidation.to_json())

# convert the object into a dict
event_hub_connection_validation_dict = event_hub_connection_validation_instance.to_dict()
# create an instance of EventHubConnectionValidation from a dict
event_hub_connection_validation_from_dict = EventHubConnectionValidation.from_dict(event_hub_connection_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


