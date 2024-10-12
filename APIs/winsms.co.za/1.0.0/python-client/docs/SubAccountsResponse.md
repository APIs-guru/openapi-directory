# SubAccountsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**sub_accounts** | [**List[SubAccount]**](SubAccount.md) | An array of ***subAccount*** objects containing properties of each Sub Account owned by the Main Account.  | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.sub_accounts_response import SubAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubAccountsResponse from a JSON string
sub_accounts_response_instance = SubAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(SubAccountsResponse.to_json())

# convert the object into a dict
sub_accounts_response_dict = sub_accounts_response_instance.to_dict()
# create an instance of SubAccountsResponse from a dict
sub_accounts_response_from_dict = SubAccountsResponse.from_dict(sub_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


