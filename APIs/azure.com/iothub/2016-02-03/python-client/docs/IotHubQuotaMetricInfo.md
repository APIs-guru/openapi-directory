# IotHubQuotaMetricInfo

Quota metrics properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current value for the quota metric. | [optional] [readonly] 
**max_value** | **int** | The maximum value of the quota metric. | [optional] [readonly] 
**name** | **str** | The name of the quota metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_hub_quota_metric_info import IotHubQuotaMetricInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubQuotaMetricInfo from a JSON string
iot_hub_quota_metric_info_instance = IotHubQuotaMetricInfo.from_json(json)
# print the JSON string representation of the object
print(IotHubQuotaMetricInfo.to_json())

# convert the object into a dict
iot_hub_quota_metric_info_dict = iot_hub_quota_metric_info_instance.to_dict()
# create an instance of IotHubQuotaMetricInfo from a dict
iot_hub_quota_metric_info_from_dict = IotHubQuotaMetricInfo.from_dict(iot_hub_quota_metric_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


