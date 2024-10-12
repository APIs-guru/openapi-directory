# EventSpecificDetails

Model class for event specific details for an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the class type. Overridden in derived classes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_specific_details import EventSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EventSpecificDetails from a JSON string
event_specific_details_instance = EventSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(EventSpecificDetails.to_json())

# convert the object into a dict
event_specific_details_dict = event_specific_details_instance.to_dict()
# create an instance of EventSpecificDetails from a dict
event_specific_details_from_dict = EventSpecificDetails.from_dict(event_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


