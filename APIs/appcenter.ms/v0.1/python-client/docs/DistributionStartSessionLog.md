# DistributionStartSessionLog

Log is used to update distribution group identifier for session (a marker event for analytics service).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_group_id** | **str** | Distribution Group ID.  | 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.distribution_start_session_log import DistributionStartSessionLog

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionStartSessionLog from a JSON string
distribution_start_session_log_instance = DistributionStartSessionLog.from_json(json)
# print the JSON string representation of the object
print(DistributionStartSessionLog.to_json())

# convert the object into a dict
distribution_start_session_log_dict = distribution_start_session_log_instance.to_dict()
# create an instance of DistributionStartSessionLog from a dict
distribution_start_session_log_from_dict = DistributionStartSessionLog.from_dict(distribution_start_session_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


