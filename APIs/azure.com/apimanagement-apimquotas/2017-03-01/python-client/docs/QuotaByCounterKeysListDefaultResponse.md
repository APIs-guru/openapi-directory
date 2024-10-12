# QuotaByCounterKeysListDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[QuotaByCounterKeysListDefaultResponseDetailsInner]**](QuotaByCounterKeysListDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.quota_by_counter_keys_list_default_response import QuotaByCounterKeysListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaByCounterKeysListDefaultResponse from a JSON string
quota_by_counter_keys_list_default_response_instance = QuotaByCounterKeysListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(QuotaByCounterKeysListDefaultResponse.to_json())

# convert the object into a dict
quota_by_counter_keys_list_default_response_dict = quota_by_counter_keys_list_default_response_instance.to_dict()
# create an instance of QuotaByCounterKeysListDefaultResponse from a dict
quota_by_counter_keys_list_default_response_from_dict = QuotaByCounterKeysListDefaultResponse.from_dict(quota_by_counter_keys_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


