# AccountSupportedPlatforms200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported_platforms** | [**List[AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner]**](AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_supported_platforms200_response_result import AccountSupportedPlatforms200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSupportedPlatforms200ResponseResult from a JSON string
account_supported_platforms200_response_result_instance = AccountSupportedPlatforms200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(AccountSupportedPlatforms200ResponseResult.to_json())

# convert the object into a dict
account_supported_platforms200_response_result_dict = account_supported_platforms200_response_result_instance.to_dict()
# create an instance of AccountSupportedPlatforms200ResponseResult from a dict
account_supported_platforms200_response_result_from_dict = AccountSupportedPlatforms200ResponseResult.from_dict(account_supported_platforms200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


