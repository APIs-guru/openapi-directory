# DetectorAbnormalTimePeriod

Class representing Abnormal Time Period detected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | End time of the correlated event | [optional] 
**message** | **str** | Message describing the event | [optional] 
**meta_data** | **List[List[AnalysisDataDataInnerInner]]** | Downtime metadata | [optional] 
**priority** | **float** | Represents the rank of the Detector | [optional] 
**solutions** | [**List[Solution]**](Solution.md) | List of proposed solutions | [optional] 
**source** | **str** | Represents the name of the Detector | [optional] 
**start_time** | **datetime** | Start time of the correlated event | [optional] 
**type** | **str** | Represents the type of the Detector | [optional] 

## Example

```python
from openapi_client.models.detector_abnormal_time_period import DetectorAbnormalTimePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of DetectorAbnormalTimePeriod from a JSON string
detector_abnormal_time_period_instance = DetectorAbnormalTimePeriod.from_json(json)
# print the JSON string representation of the object
print(DetectorAbnormalTimePeriod.to_json())

# convert the object into a dict
detector_abnormal_time_period_dict = detector_abnormal_time_period_instance.to_dict()
# create an instance of DetectorAbnormalTimePeriod from a dict
detector_abnormal_time_period_from_dict = DetectorAbnormalTimePeriod.from_dict(detector_abnormal_time_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


