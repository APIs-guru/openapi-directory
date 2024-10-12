# FilterTrackSelection

Representing a list of FilterTrackPropertyConditions to select a track.  The filters are combined using a logical AND operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track_selections** | [**List[FilterTrackPropertyCondition]**](FilterTrackPropertyCondition.md) | The track selections. | 

## Example

```python
from openapi_client.models.filter_track_selection import FilterTrackSelection

# TODO update the JSON string below
json = "{}"
# create an instance of FilterTrackSelection from a JSON string
filter_track_selection_instance = FilterTrackSelection.from_json(json)
# print the JSON string representation of the object
print(FilterTrackSelection.to_json())

# convert the object into a dict
filter_track_selection_dict = filter_track_selection_instance.to_dict()
# create an instance of FilterTrackSelection from a dict
filter_track_selection_from_dict = FilterTrackSelection.from_dict(filter_track_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


