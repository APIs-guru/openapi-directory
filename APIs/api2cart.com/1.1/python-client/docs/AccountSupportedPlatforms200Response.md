# AccountSupportedPlatforms200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**AccountSupportedPlatforms200ResponseResult**](AccountSupportedPlatforms200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_supported_platforms200_response import AccountSupportedPlatforms200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSupportedPlatforms200Response from a JSON string
account_supported_platforms200_response_instance = AccountSupportedPlatforms200Response.from_json(json)
# print the JSON string representation of the object
print(AccountSupportedPlatforms200Response.to_json())

# convert the object into a dict
account_supported_platforms200_response_dict = account_supported_platforms200_response_instance.to_dict()
# create an instance of AccountSupportedPlatforms200Response from a dict
account_supported_platforms200_response_from_dict = AccountSupportedPlatforms200Response.from_dict(account_supported_platforms200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


