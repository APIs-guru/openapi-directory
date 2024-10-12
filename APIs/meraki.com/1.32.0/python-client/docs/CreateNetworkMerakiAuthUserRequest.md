# CreateNetworkMerakiAuthUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Authorization type for user. Can be &#39;Guest&#39; or &#39;802.1X&#39; for wireless networks, or &#39;Client VPN&#39; for wired networks. Defaults to &#39;802.1X&#39;. | [optional] [default to '802.1X']
**authorizations** | [**List[CreateNetworkMerakiAuthUserRequestAuthorizationsInner]**](CreateNetworkMerakiAuthUserRequestAuthorizationsInner.md) | Authorization zones and expiration dates for the user. | 
**email** | **str** | Email address of the user | 
**email_password_to_user** | **bool** | Whether or not Meraki should email the password to user. Default is false. | [optional] 
**is_admin** | **bool** | Whether or not the user is a Dashboard administrator. | [optional] 
**name** | **str** | Name of the user. Only required If the user is not a Dashboard administrator. | [optional] 
**password** | **str** | The password for this user account. Only required If the user is not a Dashboard administrator. | [optional] 

## Example

```python
from openapi_client.models.create_network_meraki_auth_user_request import CreateNetworkMerakiAuthUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkMerakiAuthUserRequest from a JSON string
create_network_meraki_auth_user_request_instance = CreateNetworkMerakiAuthUserRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkMerakiAuthUserRequest.to_json())

# convert the object into a dict
create_network_meraki_auth_user_request_dict = create_network_meraki_auth_user_request_instance.to_dict()
# create an instance of CreateNetworkMerakiAuthUserRequest from a dict
create_network_meraki_auth_user_request_from_dict = CreateNetworkMerakiAuthUserRequest.from_dict(create_network_meraki_auth_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


