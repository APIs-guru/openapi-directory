# API2ModelsBigOvenUser

An API2 wrapper object for a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting** | [**API2ModelsAccounting**](API2ModelsAccounting.md) |  | [optional] 
**bo_auth_token** | **str** | The user-specific authentication token | [optional] 
**last_change_log_id** | **str** | Last change log | [optional] 
**personal** | [**API2ModelsPersonal**](API2ModelsPersonal.md) |  | [optional] 
**preferences** | [**API2ModelsPreference**](API2ModelsPreference.md) |  | [optional] 
**profile** | [**API2ModelsProfile**](API2ModelsProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.api2_models_big_oven_user import API2ModelsBigOvenUser

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsBigOvenUser from a JSON string
api2_models_big_oven_user_instance = API2ModelsBigOvenUser.from_json(json)
# print the JSON string representation of the object
print(API2ModelsBigOvenUser.to_json())

# convert the object into a dict
api2_models_big_oven_user_dict = api2_models_big_oven_user_instance.to_dict()
# create an instance of API2ModelsBigOvenUser from a dict
api2_models_big_oven_user_from_dict = API2ModelsBigOvenUser.from_dict(api2_models_big_oven_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


