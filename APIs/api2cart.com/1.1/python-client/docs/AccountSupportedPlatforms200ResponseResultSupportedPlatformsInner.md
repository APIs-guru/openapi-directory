# AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_id** | **str** |  | [optional] 
**cart_method** | **str** |  | [optional] 
**cart_name** | **str** |  | [optional] 
**cart_versions** | **str** |  | [optional] 
**params** | [**AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams**](AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_supported_platforms200_response_result_supported_platforms_inner import AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner from a JSON string
account_supported_platforms200_response_result_supported_platforms_inner_instance = AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner.from_json(json)
# print the JSON string representation of the object
print(AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner.to_json())

# convert the object into a dict
account_supported_platforms200_response_result_supported_platforms_inner_dict = account_supported_platforms200_response_result_supported_platforms_inner_instance.to_dict()
# create an instance of AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner from a dict
account_supported_platforms200_response_result_supported_platforms_inner_from_dict = AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner.from_dict(account_supported_platforms200_response_result_supported_platforms_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


