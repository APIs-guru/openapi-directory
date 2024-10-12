# EventingDetails

Eventing Details message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_event_types** | **bool** | Output only. Custom Event Types. | [optional] [readonly] 
**description** | **str** | Output only. Description. | [optional] [readonly] 
**documentation_link** | **str** | Output only. Link to public documentation. | [optional] [readonly] 
**icon_location** | **str** | Output only. Cloud storage location of the icon. | [optional] [readonly] 
**launch_stage** | **str** | Output only. Eventing Launch Stage. | [optional] [readonly] 
**name** | **str** | Output only. Name of the Eventing trigger. | [optional] [readonly] 
**search_tags** | **List[str]** | Output only. Array of search keywords. | [optional] [readonly] 
**type** | **str** | Output only. The type of the event listener for a specific connector. | [optional] [readonly] 

## Example

```python
from openapi_client.models.eventing_details import EventingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EventingDetails from a JSON string
eventing_details_instance = EventingDetails.from_json(json)
# print the JSON string representation of the object
print(EventingDetails.to_json())

# convert the object into a dict
eventing_details_dict = eventing_details_instance.to_dict()
# create an instance of EventingDetails from a dict
eventing_details_from_dict = EventingDetails.from_dict(eventing_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


