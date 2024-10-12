# TrackPropertyCondition

Class to specify one track property condition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | Track property condition operation | 
**var_property** | **str** | Track property type | 
**value** | **str** | Track property value | [optional] 

## Example

```python
from openapi_client.models.track_property_condition import TrackPropertyCondition

# TODO update the JSON string below
json = "{}"
# create an instance of TrackPropertyCondition from a JSON string
track_property_condition_instance = TrackPropertyCondition.from_json(json)
# print the JSON string representation of the object
print(TrackPropertyCondition.to_json())

# convert the object into a dict
track_property_condition_dict = track_property_condition_instance.to_dict()
# create an instance of TrackPropertyCondition from a dict
track_property_condition_from_dict = TrackPropertyCondition.from_dict(track_property_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


