# InstanceHitHighlights

Highlighted text of time series instance to be displayed to the user. Highlighting inserts <hit> and </hit> tags in the portions of text that matched the search string. Do not use any of the highlighted properties to do further API calls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Highlighted description of time series instance. May be null. | [optional] [readonly] 
**hierarchy_ids** | **List[str]** | List of highlighted time series hierarchy IDs that time series instance belongs to. Cannot be used to lookup hierarchies. May be null. | [optional] [readonly] 
**hierarchy_names** | **List[str]** | List of highlighted time series hierarchy names that time series instance belongs to. Cannot be used to lookup hierarchies. May be null. | [optional] [readonly] 
**instance_field_names** | **List[str]** | List of highlighted time series instance field names. May be null. | [optional] [readonly] 
**instance_field_values** | **List[str]** | List of highlighted time series instance field values. May be null. | [optional] [readonly] 
**name** | **str** | Highlighted name of time series instance. May be null. | [optional] [readonly] 
**time_series_id** | **List[str]** | List of highlighted string values of Time Series ID for displaying. Cannot be used to lookup instance. | [optional] [readonly] 
**type_name** | **str** | Highlighted time series type name that this instance belongs to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_hit_highlights import InstanceHitHighlights

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceHitHighlights from a JSON string
instance_hit_highlights_instance = InstanceHitHighlights.from_json(json)
# print the JSON string representation of the object
print(InstanceHitHighlights.to_json())

# convert the object into a dict
instance_hit_highlights_dict = instance_hit_highlights_instance.to_dict()
# create an instance of InstanceHitHighlights from a dict
instance_hit_highlights_from_dict = InstanceHitHighlights.from_dict(instance_hit_highlights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


