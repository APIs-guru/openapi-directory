# IssuerToUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**sign_up_info** | [**SignUpInfo**](SignUpInfo.md) |  | [optional] 
**url** | **str** | Currently not used, consider deprecating. | [optional] 
**value** | **str** | JSON web token for action S2AP. | [optional] 

## Example

```python
from openapi_client.models.issuer_to_user_info import IssuerToUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerToUserInfo from a JSON string
issuer_to_user_info_instance = IssuerToUserInfo.from_json(json)
# print the JSON string representation of the object
print(IssuerToUserInfo.to_json())

# convert the object into a dict
issuer_to_user_info_dict = issuer_to_user_info_instance.to_dict()
# create an instance of IssuerToUserInfo from a dict
issuer_to_user_info_from_dict = IssuerToUserInfo.from_dict(issuer_to_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


