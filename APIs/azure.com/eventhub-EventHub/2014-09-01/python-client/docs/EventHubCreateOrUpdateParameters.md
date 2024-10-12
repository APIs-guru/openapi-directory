# EventHubCreateOrUpdateParameters

Parameters supplied to the Create Or Update Event Hub operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource. | 
**name** | **str** | Name of the Event Hub. | [optional] 
**properties** | [**EventHubProperties**](EventHubProperties.md) |  | [optional] 
**type** | **str** | ARM type of the Namespace. | [optional] 

## Example

```python
from openapi_client.models.event_hub_create_or_update_parameters import EventHubCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubCreateOrUpdateParameters from a JSON string
event_hub_create_or_update_parameters_instance = EventHubCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EventHubCreateOrUpdateParameters.to_json())

# convert the object into a dict
event_hub_create_or_update_parameters_dict = event_hub_create_or_update_parameters_instance.to_dict()
# create an instance of EventHubCreateOrUpdateParameters from a dict
event_hub_create_or_update_parameters_from_dict = EventHubCreateOrUpdateParameters.from_dict(event_hub_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


