# CrashCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total crash count. | [optional] 
**crashes** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The total crash count for day. | [optional] 

## Example

```python
from openapi_client.models.crash_counts import CrashCounts

# TODO update the JSON string below
json = "{}"
# create an instance of CrashCounts from a JSON string
crash_counts_instance = CrashCounts.from_json(json)
# print the JSON string representation of the object
print(CrashCounts.to_json())

# convert the object into a dict
crash_counts_dict = crash_counts_instance.to_dict()
# create an instance of CrashCounts from a dict
crash_counts_from_dict = CrashCounts.from_dict(crash_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


