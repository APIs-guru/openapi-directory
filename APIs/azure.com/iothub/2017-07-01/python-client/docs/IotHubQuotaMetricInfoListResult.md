# IotHubQuotaMetricInfoListResult

The JSON-serialized array of IotHubQuotaMetricInfo objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[IotHubQuotaMetricInfo]**](IotHubQuotaMetricInfo.md) | The array of quota metrics objects. | [optional] 

## Example

```python
from openapi_client.models.iot_hub_quota_metric_info_list_result import IotHubQuotaMetricInfoListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubQuotaMetricInfoListResult from a JSON string
iot_hub_quota_metric_info_list_result_instance = IotHubQuotaMetricInfoListResult.from_json(json)
# print the JSON string representation of the object
print(IotHubQuotaMetricInfoListResult.to_json())

# convert the object into a dict
iot_hub_quota_metric_info_list_result_dict = iot_hub_quota_metric_info_list_result_instance.to_dict()
# create an instance of IotHubQuotaMetricInfoListResult from a dict
iot_hub_quota_metric_info_list_result_from_dict = IotHubQuotaMetricInfoListResult.from_dict(iot_hub_quota_metric_info_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


