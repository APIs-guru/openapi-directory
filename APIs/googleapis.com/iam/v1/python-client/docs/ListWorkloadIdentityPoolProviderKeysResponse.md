# ListWorkloadIdentityPoolProviderKeysResponse

Response message for ListWorkloadIdentityPoolProviderKeys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**workload_identity_pool_provider_keys** | [**List[WorkloadIdentityPoolProviderKey]**](WorkloadIdentityPoolProviderKey.md) | A list of WorkloadIdentityPoolProviderKey | [optional] 

## Example

```python
from openapi_client.models.list_workload_identity_pool_provider_keys_response import ListWorkloadIdentityPoolProviderKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkloadIdentityPoolProviderKeysResponse from a JSON string
list_workload_identity_pool_provider_keys_response_instance = ListWorkloadIdentityPoolProviderKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkloadIdentityPoolProviderKeysResponse.to_json())

# convert the object into a dict
list_workload_identity_pool_provider_keys_response_dict = list_workload_identity_pool_provider_keys_response_instance.to_dict()
# create an instance of ListWorkloadIdentityPoolProviderKeysResponse from a dict
list_workload_identity_pool_provider_keys_response_from_dict = ListWorkloadIdentityPoolProviderKeysResponse.from_dict(list_workload_identity_pool_provider_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


