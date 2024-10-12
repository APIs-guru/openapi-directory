# CustomAccount

Describes authentication configuration that uses a custom account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_url** | **str** | Required. The login form URL of the website. | [optional] 
**password** | **str** | Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs. | [optional] 
**username** | **str** | Required. The user name of the custom account. | [optional] 

## Example

```python
from openapi_client.models.custom_account import CustomAccount

# TODO update the JSON string below
json = "{}"
# create an instance of CustomAccount from a JSON string
custom_account_instance = CustomAccount.from_json(json)
# print the JSON string representation of the object
print(CustomAccount.to_json())

# convert the object into a dict
custom_account_dict = custom_account_instance.to_dict()
# create an instance of CustomAccount from a dict
custom_account_from_dict = CustomAccount.from_dict(custom_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


