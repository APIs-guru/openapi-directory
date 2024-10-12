# QuotaByCounterKeysListByService200ResponseValueInner

Quota counter details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counter_key** | **str** | The Key value of the Counter. Must not be empty. | 
**period_end_time** | **datetime** | The date of the end of Counter Period. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**period_key** | **str** | Identifier of the Period for which the counter was collected. Must not be empty. | 
**period_start_time** | **datetime** | The date of the start of Counter Period. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**value** | [**QuotaByCounterKeysListByService200ResponseValueInnerValue**](QuotaByCounterKeysListByService200ResponseValueInnerValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.quota_by_counter_keys_list_by_service200_response_value_inner import QuotaByCounterKeysListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaByCounterKeysListByService200ResponseValueInner from a JSON string
quota_by_counter_keys_list_by_service200_response_value_inner_instance = QuotaByCounterKeysListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(QuotaByCounterKeysListByService200ResponseValueInner.to_json())

# convert the object into a dict
quota_by_counter_keys_list_by_service200_response_value_inner_dict = quota_by_counter_keys_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of QuotaByCounterKeysListByService200ResponseValueInner from a dict
quota_by_counter_keys_list_by_service200_response_value_inner_from_dict = QuotaByCounterKeysListByService200ResponseValueInner.from_dict(quota_by_counter_keys_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


