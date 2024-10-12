# EventHubConnectionValidationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | A message which indicates a problem in event hub connection validation. | [optional] 

## Example

```python
from openapi_client.models.event_hub_connection_validation_result import EventHubConnectionValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConnectionValidationResult from a JSON string
event_hub_connection_validation_result_instance = EventHubConnectionValidationResult.from_json(json)
# print the JSON string representation of the object
print(EventHubConnectionValidationResult.to_json())

# convert the object into a dict
event_hub_connection_validation_result_dict = event_hub_connection_validation_result_instance.to_dict()
# create an instance of EventHubConnectionValidationResult from a dict
event_hub_connection_validation_result_from_dict = EventHubConnectionValidationResult.from_dict(event_hub_connection_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


