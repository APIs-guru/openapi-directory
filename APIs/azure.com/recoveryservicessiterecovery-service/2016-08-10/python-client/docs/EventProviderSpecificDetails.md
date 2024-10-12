# EventProviderSpecificDetails

Model class for provider specific details for an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the class type. Overridden in derived classes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_provider_specific_details import EventProviderSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EventProviderSpecificDetails from a JSON string
event_provider_specific_details_instance = EventProviderSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(EventProviderSpecificDetails.to_json())

# convert the object into a dict
event_provider_specific_details_dict = event_provider_specific_details_instance.to_dict()
# create an instance of EventProviderSpecificDetails from a dict
event_provider_specific_details_from_dict = EventProviderSpecificDetails.from_dict(event_provider_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


