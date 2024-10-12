# TimeMachineTimeMachineCloudCoverData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **int** | Percentage of sky covered by high clouds. Unit: % | [optional] 
**low** | **int** | Percentage of sky covered by low clouds. Unit: % | [optional] 
**middle** | **int** | Percentage of sky covered by middle clouds. Unit: % | [optional] 
**total** | **int** | Percentage of sky covered by clouds. Unit: % | [optional] 

## Example

```python
from openapi_client.models.time_machine_time_machine_cloud_cover_data import TimeMachineTimeMachineCloudCoverData

# TODO update the JSON string below
json = "{}"
# create an instance of TimeMachineTimeMachineCloudCoverData from a JSON string
time_machine_time_machine_cloud_cover_data_instance = TimeMachineTimeMachineCloudCoverData.from_json(json)
# print the JSON string representation of the object
print(TimeMachineTimeMachineCloudCoverData.to_json())

# convert the object into a dict
time_machine_time_machine_cloud_cover_data_dict = time_machine_time_machine_cloud_cover_data_instance.to_dict()
# create an instance of TimeMachineTimeMachineCloudCoverData from a dict
time_machine_time_machine_cloud_cover_data_from_dict = TimeMachineTimeMachineCloudCoverData.from_dict(time_machine_time_machine_cloud_cover_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


