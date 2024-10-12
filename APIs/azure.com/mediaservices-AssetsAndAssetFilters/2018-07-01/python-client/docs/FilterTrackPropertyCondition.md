# FilterTrackPropertyCondition

The class to specify one track property condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | The track property condition operation. | 
**var_property** | **str** | The track property type. | 
**value** | **str** | The track property value. | 

## Example

```python
from openapi_client.models.filter_track_property_condition import FilterTrackPropertyCondition

# TODO update the JSON string below
json = "{}"
# create an instance of FilterTrackPropertyCondition from a JSON string
filter_track_property_condition_instance = FilterTrackPropertyCondition.from_json(json)
# print the JSON string representation of the object
print(FilterTrackPropertyCondition.to_json())

# convert the object into a dict
filter_track_property_condition_dict = filter_track_property_condition_instance.to_dict()
# create an instance of FilterTrackPropertyCondition from a dict
filter_track_property_condition_from_dict = FilterTrackPropertyCondition.from_dict(filter_track_property_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


