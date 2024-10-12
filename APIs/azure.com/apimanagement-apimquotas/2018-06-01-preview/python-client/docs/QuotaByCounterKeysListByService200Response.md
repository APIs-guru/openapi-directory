# QuotaByCounterKeysListByService200Response

Paged Quota Counter list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[QuotaByCounterKeysListByService200ResponseValueInner]**](QuotaByCounterKeysListByService200ResponseValueInner.md) | Quota counter values. | [optional] 

## Example

```python
from openapi_client.models.quota_by_counter_keys_list_by_service200_response import QuotaByCounterKeysListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaByCounterKeysListByService200Response from a JSON string
quota_by_counter_keys_list_by_service200_response_instance = QuotaByCounterKeysListByService200Response.from_json(json)
# print the JSON string representation of the object
print(QuotaByCounterKeysListByService200Response.to_json())

# convert the object into a dict
quota_by_counter_keys_list_by_service200_response_dict = quota_by_counter_keys_list_by_service200_response_instance.to_dict()
# create an instance of QuotaByCounterKeysListByService200Response from a dict
quota_by_counter_keys_list_by_service200_response_from_dict = QuotaByCounterKeysListByService200Response.from_dict(quota_by_counter_keys_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


