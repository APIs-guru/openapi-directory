# EventingStatus

EventingStatus indicates the state of eventing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Output only. Description of error if State is set to \&quot;ERROR\&quot;. | [optional] [readonly] 
**state** | **str** | Output only. State. | [optional] [readonly] 

## Example

```python
from openapi_client.models.eventing_status import EventingStatus

# TODO update the JSON string below
json = "{}"
# create an instance of EventingStatus from a JSON string
eventing_status_instance = EventingStatus.from_json(json)
# print the JSON string representation of the object
print(EventingStatus.to_json())

# convert the object into a dict
eventing_status_dict = eventing_status_instance.to_dict()
# create an instance of EventingStatus from a dict
eventing_status_from_dict = EventingStatus.from_dict(eventing_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


