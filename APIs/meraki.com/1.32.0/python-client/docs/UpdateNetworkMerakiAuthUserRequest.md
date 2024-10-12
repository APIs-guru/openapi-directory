# UpdateNetworkMerakiAuthUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | [**List[UpdateNetworkMerakiAuthUserRequestAuthorizationsInner]**](UpdateNetworkMerakiAuthUserRequestAuthorizationsInner.md) | Authorization zones and expiration dates for the user. | [optional] 
**email_password_to_user** | **bool** | Whether or not Meraki should email the password to user. Default is false. | [optional] 
**name** | **str** | Name of the user. Only allowed If the user is not Dashboard administrator. | [optional] 
**password** | **str** | The password for this user account. Only allowed If the user is not Dashboard administrator. | [optional] 

## Example

```python
from openapi_client.models.update_network_meraki_auth_user_request import UpdateNetworkMerakiAuthUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkMerakiAuthUserRequest from a JSON string
update_network_meraki_auth_user_request_instance = UpdateNetworkMerakiAuthUserRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkMerakiAuthUserRequest.to_json())

# convert the object into a dict
update_network_meraki_auth_user_request_dict = update_network_meraki_auth_user_request_instance.to_dict()
# create an instance of UpdateNetworkMerakiAuthUserRequest from a dict
update_network_meraki_auth_user_request_from_dict = UpdateNetworkMerakiAuthUserRequest.from_dict(update_network_meraki_auth_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


