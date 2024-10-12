# ListProvidersResponse

The response message for the `ListProviders` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A page token that can be sent to &#x60;ListProviders&#x60; to request the next page. If this is empty, then there are no more pages. | [optional] 
**providers** | [**List[Provider]**](Provider.md) | The requested providers, up to the number specified in &#x60;page_size&#x60;. | [optional] 
**unreachable** | **List[str]** | Unreachable resources, if any. | [optional] 

## Example

```python
from openapi_client.models.list_providers_response import ListProvidersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProvidersResponse from a JSON string
list_providers_response_instance = ListProvidersResponse.from_json(json)
# print the JSON string representation of the object
print(ListProvidersResponse.to_json())

# convert the object into a dict
list_providers_response_dict = list_providers_response_instance.to_dict()
# create an instance of ListProvidersResponse from a dict
list_providers_response_from_dict = ListProvidersResponse.from_dict(list_providers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


