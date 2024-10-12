# GetAllAccounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**List[GetAllAccountResponse]**](GetAllAccountResponse.md) |  | [optional] 
**links** | [**GetAllAccounts200ResponseLinks**](GetAllAccounts200ResponseLinks.md) |  | [optional] 
**page_number** | **int** |  | [optional] 
**page_size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_all_accounts200_response import GetAllAccounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllAccounts200Response from a JSON string
get_all_accounts200_response_instance = GetAllAccounts200Response.from_json(json)
# print the JSON string representation of the object
print(GetAllAccounts200Response.to_json())

# convert the object into a dict
get_all_accounts200_response_dict = get_all_accounts200_response_instance.to_dict()
# create an instance of GetAllAccounts200Response from a dict
get_all_accounts200_response_from_dict = GetAllAccounts200Response.from_dict(get_all_accounts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


