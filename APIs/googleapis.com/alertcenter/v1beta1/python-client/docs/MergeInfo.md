# MergeInfo

New alert tracking numbers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_alert_id** | **str** | Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state. | [optional] 
**new_incident_tracking_id** | **str** | The new tracking ID from the parent incident. | [optional] 

## Example

```python
from openapi_client.models.merge_info import MergeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MergeInfo from a JSON string
merge_info_instance = MergeInfo.from_json(json)
# print the JSON string representation of the object
print(MergeInfo.to_json())

# convert the object into a dict
merge_info_dict = merge_info_instance.to_dict()
# create an instance of MergeInfo from a dict
merge_info_from_dict = MergeInfo.from_dict(merge_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


