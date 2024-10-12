# TrustedIdProviderListResult

Data Lake Store trusted identity provider list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[TrustedIdProvider]**](TrustedIdProvider.md) | The results of the list operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trusted_id_provider_list_result import TrustedIdProviderListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TrustedIdProviderListResult from a JSON string
trusted_id_provider_list_result_instance = TrustedIdProviderListResult.from_json(json)
# print the JSON string representation of the object
print(TrustedIdProviderListResult.to_json())

# convert the object into a dict
trusted_id_provider_list_result_dict = trusted_id_provider_list_result_instance.to_dict()
# create an instance of TrustedIdProviderListResult from a dict
trusted_id_provider_list_result_from_dict = TrustedIdProviderListResult.from_dict(trusted_id_provider_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


