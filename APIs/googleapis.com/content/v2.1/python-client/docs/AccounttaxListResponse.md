# AccounttaxListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accounttaxListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of account tax settings. | [optional] 
**resources** | [**List[AccountTax]**](AccountTax.md) |  | [optional] 

## Example

```python
from openapi_client.models.accounttax_list_response import AccounttaxListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccounttaxListResponse from a JSON string
accounttax_list_response_instance = AccounttaxListResponse.from_json(json)
# print the JSON string representation of the object
print(AccounttaxListResponse.to_json())

# convert the object into a dict
accounttax_list_response_dict = accounttax_list_response_instance.to_dict()
# create an instance of AccounttaxListResponse from a dict
accounttax_list_response_from_dict = AccounttaxListResponse.from_dict(accounttax_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


