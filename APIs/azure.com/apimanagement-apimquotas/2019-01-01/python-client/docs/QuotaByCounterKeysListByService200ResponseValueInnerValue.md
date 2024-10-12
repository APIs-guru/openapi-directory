# QuotaByCounterKeysListByService200ResponseValueInnerValue

Quota counter value details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls_count** | **int** | Number of times Counter was called. | [optional] 
**kb_transferred** | **float** | Data Transferred in KiloBytes. | [optional] 

## Example

```python
from openapi_client.models.quota_by_counter_keys_list_by_service200_response_value_inner_value import QuotaByCounterKeysListByService200ResponseValueInnerValue

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaByCounterKeysListByService200ResponseValueInnerValue from a JSON string
quota_by_counter_keys_list_by_service200_response_value_inner_value_instance = QuotaByCounterKeysListByService200ResponseValueInnerValue.from_json(json)
# print the JSON string representation of the object
print(QuotaByCounterKeysListByService200ResponseValueInnerValue.to_json())

# convert the object into a dict
quota_by_counter_keys_list_by_service200_response_value_inner_value_dict = quota_by_counter_keys_list_by_service200_response_value_inner_value_instance.to_dict()
# create an instance of QuotaByCounterKeysListByService200ResponseValueInnerValue from a dict
quota_by_counter_keys_list_by_service200_response_value_inner_value_from_dict = QuotaByCounterKeysListByService200ResponseValueInnerValue.from_dict(quota_by_counter_keys_list_by_service200_response_value_inner_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


