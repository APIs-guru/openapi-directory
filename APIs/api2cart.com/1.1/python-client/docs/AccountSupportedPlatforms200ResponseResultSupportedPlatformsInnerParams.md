# AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional** | [**List[AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParamsAdditionalInner]**](AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParamsAdditionalInner.md) |  | [optional] 
**required** | **List[List[AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParamsAdditionalInner]]** |  | [optional] 

## Example

```python
from openapi_client.models.account_supported_platforms200_response_result_supported_platforms_inner_params import AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams from a JSON string
account_supported_platforms200_response_result_supported_platforms_inner_params_instance = AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams.from_json(json)
# print the JSON string representation of the object
print(AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams.to_json())

# convert the object into a dict
account_supported_platforms200_response_result_supported_platforms_inner_params_dict = account_supported_platforms200_response_result_supported_platforms_inner_params_instance.to_dict()
# create an instance of AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams from a dict
account_supported_platforms200_response_result_supported_platforms_inner_params_from_dict = AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams.from_dict(account_supported_platforms200_response_result_supported_platforms_inner_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


