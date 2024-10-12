# GetAccountInfoResponse

Response of getting account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The fixed string \&quot;identitytoolkit#GetAccountInfoResponse\&quot;. | [optional] [default to 'identitytoolkit#GetAccountInfoResponse']
**users** | [**List[UserInfo]**](UserInfo.md) | The info of the users. | [optional] 

## Example

```python
from openapi_client.models.get_account_info_response import GetAccountInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAccountInfoResponse from a JSON string
get_account_info_response_instance = GetAccountInfoResponse.from_json(json)
# print the JSON string representation of the object
print(GetAccountInfoResponse.to_json())

# convert the object into a dict
get_account_info_response_dict = get_account_info_response_instance.to_dict()
# create an instance of GetAccountInfoResponse from a dict
get_account_info_response_from_dict = GetAccountInfoResponse.from_dict(get_account_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


