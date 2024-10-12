# UpdateNetworkMerakiAuthUserRequestAuthorizationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **str** | Date for authorization to expire. Default is for authorization to not expire. | [optional] [default to 'Never']
**ssid_number** | **int** | SSID for which the user is being authorized | 

## Example

```python
from openapi_client.models.update_network_meraki_auth_user_request_authorizations_inner import UpdateNetworkMerakiAuthUserRequestAuthorizationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkMerakiAuthUserRequestAuthorizationsInner from a JSON string
update_network_meraki_auth_user_request_authorizations_inner_instance = UpdateNetworkMerakiAuthUserRequestAuthorizationsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkMerakiAuthUserRequestAuthorizationsInner.to_json())

# convert the object into a dict
update_network_meraki_auth_user_request_authorizations_inner_dict = update_network_meraki_auth_user_request_authorizations_inner_instance.to_dict()
# create an instance of UpdateNetworkMerakiAuthUserRequestAuthorizationsInner from a dict
update_network_meraki_auth_user_request_authorizations_inner_from_dict = UpdateNetworkMerakiAuthUserRequestAuthorizationsInner.from_dict(update_network_meraki_auth_user_request_authorizations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


