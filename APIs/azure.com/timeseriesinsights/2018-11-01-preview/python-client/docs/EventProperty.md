# EventProperty

Property of an event that is either stored or computed. Properties are identified by both name and type. Different events can have properties with same name, but different type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the property. | [optional] 
**type** | [**PropertyType**](PropertyType.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_property import EventProperty

# TODO update the JSON string below
json = "{}"
# create an instance of EventProperty from a JSON string
event_property_instance = EventProperty.from_json(json)
# print the JSON string representation of the object
print(EventProperty.to_json())

# convert the object into a dict
event_property_dict = event_property_instance.to_dict()
# create an instance of EventProperty from a dict
event_property_from_dict = EventProperty.from_dict(event_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


