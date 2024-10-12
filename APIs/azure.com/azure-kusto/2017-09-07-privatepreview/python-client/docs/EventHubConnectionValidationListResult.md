# EventHubConnectionValidationListResult

The list Kusto event hub connection validation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[EventHubConnectionValidationResult]**](EventHubConnectionValidationResult.md) | The list of Kusto event hub connection validation errors. | [optional] 

## Example

```python
from openapi_client.models.event_hub_connection_validation_list_result import EventHubConnectionValidationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConnectionValidationListResult from a JSON string
event_hub_connection_validation_list_result_instance = EventHubConnectionValidationListResult.from_json(json)
# print the JSON string representation of the object
print(EventHubConnectionValidationListResult.to_json())

# convert the object into a dict
event_hub_connection_validation_list_result_dict = event_hub_connection_validation_list_result_instance.to_dict()
# create an instance of EventHubConnectionValidationListResult from a dict
event_hub_connection_validation_list_result_from_dict = EventHubConnectionValidationListResult.from_dict(event_hub_connection_validation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


