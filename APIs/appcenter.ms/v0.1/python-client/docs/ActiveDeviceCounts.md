# ActiveDeviceCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The active device count for each interval. | [optional] 
**monthly** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The active device count for each interval with a month&#39;s retention. | [optional] 
**weekly** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The active device count for each interval with a week&#39;s retention. | [optional] 

## Example

```python
from openapi_client.models.active_device_counts import ActiveDeviceCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveDeviceCounts from a JSON string
active_device_counts_instance = ActiveDeviceCounts.from_json(json)
# print the JSON string representation of the object
print(ActiveDeviceCounts.to_json())

# convert the object into a dict
active_device_counts_dict = active_device_counts_instance.to_dict()
# create an instance of ActiveDeviceCounts from a dict
active_device_counts_from_dict = ActiveDeviceCounts.from_dict(active_device_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


