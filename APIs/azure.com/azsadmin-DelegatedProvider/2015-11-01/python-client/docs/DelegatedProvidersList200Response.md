# DelegatedProvidersList200Response

List of subscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[DelegatedProvidersList200ResponseValueInner]**](DelegatedProvidersList200ResponseValueInner.md) | Subscription definition. | [optional] 

## Example

```python
from openapi_client.models.delegated_providers_list200_response import DelegatedProvidersList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DelegatedProvidersList200Response from a JSON string
delegated_providers_list200_response_instance = DelegatedProvidersList200Response.from_json(json)
# print the JSON string representation of the object
print(DelegatedProvidersList200Response.to_json())

# convert the object into a dict
delegated_providers_list200_response_dict = delegated_providers_list200_response_instance.to_dict()
# create an instance of DelegatedProvidersList200Response from a dict
delegated_providers_list200_response_from_dict = DelegatedProvidersList200Response.from_dict(delegated_providers_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


