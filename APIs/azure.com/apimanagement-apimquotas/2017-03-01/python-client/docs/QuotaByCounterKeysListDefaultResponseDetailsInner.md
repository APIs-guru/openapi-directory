# QuotaByCounterKeysListDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.quota_by_counter_keys_list_default_response_details_inner import QuotaByCounterKeysListDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaByCounterKeysListDefaultResponseDetailsInner from a JSON string
quota_by_counter_keys_list_default_response_details_inner_instance = QuotaByCounterKeysListDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(QuotaByCounterKeysListDefaultResponseDetailsInner.to_json())

# convert the object into a dict
quota_by_counter_keys_list_default_response_details_inner_dict = quota_by_counter_keys_list_default_response_details_inner_instance.to_dict()
# create an instance of QuotaByCounterKeysListDefaultResponseDetailsInner from a dict
quota_by_counter_keys_list_default_response_details_inner_from_dict = QuotaByCounterKeysListDefaultResponseDetailsInner.from_dict(quota_by_counter_keys_list_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


