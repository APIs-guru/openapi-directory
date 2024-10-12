# DutySummaryInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duty_end** | **datetime** |  | [optional] 
**duty_id** | **str** |  | [optional] 
**duty_start** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.duty_summary_info import DutySummaryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DutySummaryInfo from a JSON string
duty_summary_info_instance = DutySummaryInfo.from_json(json)
# print the JSON string representation of the object
print(DutySummaryInfo.to_json())

# convert the object into a dict
duty_summary_info_dict = duty_summary_info_instance.to_dict()
# create an instance of DutySummaryInfo from a dict
duty_summary_info_from_dict = DutySummaryInfo.from_dict(duty_summary_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


