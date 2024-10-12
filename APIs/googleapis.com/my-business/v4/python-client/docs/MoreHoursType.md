# MoreHoursType

More hours types that a business can offers, in addition to its regular hours.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The human-readable English display name for the hours type. | [optional] [readonly] 
**hours_type_id** | **str** | Output only. A stable ID provided by Google for this hours type. | [optional] [readonly] 
**localized_display_name** | **str** | Output only. The human-readable localized display name for the hours type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.more_hours_type import MoreHoursType

# TODO update the JSON string below
json = "{}"
# create an instance of MoreHoursType from a JSON string
more_hours_type_instance = MoreHoursType.from_json(json)
# print the JSON string representation of the object
print(MoreHoursType.to_json())

# convert the object into a dict
more_hours_type_dict = more_hours_type_instance.to_dict()
# create an instance of MoreHoursType from a dict
more_hours_type_from_dict = MoreHoursType.from_dict(more_hours_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


