# ListWorkforcePoolProvidersResponse

Response message for ListWorkforcePoolProviders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**workforce_pool_providers** | [**List[WorkforcePoolProvider]**](WorkforcePoolProvider.md) | A list of providers. | [optional] 

## Example

```python
from openapi_client.models.list_workforce_pool_providers_response import ListWorkforcePoolProvidersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkforcePoolProvidersResponse from a JSON string
list_workforce_pool_providers_response_instance = ListWorkforcePoolProvidersResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkforcePoolProvidersResponse.to_json())

# convert the object into a dict
list_workforce_pool_providers_response_dict = list_workforce_pool_providers_response_instance.to_dict()
# create an instance of ListWorkforcePoolProvidersResponse from a dict
list_workforce_pool_providers_response_from_dict = ListWorkforcePoolProvidersResponse.from_dict(list_workforce_pool_providers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


