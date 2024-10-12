# ListServiceAccountsResponse

The service account list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[ServiceAccount]**](ServiceAccount.md) | The list of matching service accounts. | [optional] 
**next_page_token** | **str** | To retrieve the next page of results, set ListServiceAccountsRequest.page_token to this value. | [optional] 

## Example

```python
from openapi_client.models.list_service_accounts_response import ListServiceAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceAccountsResponse from a JSON string
list_service_accounts_response_instance = ListServiceAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceAccountsResponse.to_json())

# convert the object into a dict
list_service_accounts_response_dict = list_service_accounts_response_instance.to_dict()
# create an instance of ListServiceAccountsResponse from a dict
list_service_accounts_response_from_dict = ListServiceAccountsResponse.from_dict(list_service_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


