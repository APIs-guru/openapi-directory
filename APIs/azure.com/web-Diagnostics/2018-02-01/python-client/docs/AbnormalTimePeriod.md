# AbnormalTimePeriod

Class representing Abnormal Time Period identified in diagnosis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | End time of the downtime | [optional] 
**events** | [**List[DetectorAbnormalTimePeriod]**](DetectorAbnormalTimePeriod.md) | List of Possible Cause of downtime | [optional] 
**solutions** | [**List[Solution]**](Solution.md) | List of proposed solutions | [optional] 
**start_time** | **datetime** | Start time of the downtime | [optional] 

## Example

```python
from openapi_client.models.abnormal_time_period import AbnormalTimePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of AbnormalTimePeriod from a JSON string
abnormal_time_period_instance = AbnormalTimePeriod.from_json(json)
# print the JSON string representation of the object
print(AbnormalTimePeriod.to_json())

# convert the object into a dict
abnormal_time_period_dict = abnormal_time_period_instance.to_dict()
# create an instance of AbnormalTimePeriod from a dict
abnormal_time_period_from_dict = AbnormalTimePeriod.from_dict(abnormal_time_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


