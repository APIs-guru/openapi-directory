# CreateNetworkMerakiAuthUserRequestAuthorizationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **str** | Date for authorization to expire. Set to &#39;Never&#39; for the authorization to not expire, which is the default. | [optional] [default to 'Never']
**ssid_number** | **int** | Required for wireless networks. The SSID for which the user is being authorized, which must be configured for the user&#39;s given accountType. | [optional] 

## Example

```python
from openapi_client.models.create_network_meraki_auth_user_request_authorizations_inner import CreateNetworkMerakiAuthUserRequestAuthorizationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkMerakiAuthUserRequestAuthorizationsInner from a JSON string
create_network_meraki_auth_user_request_authorizations_inner_instance = CreateNetworkMerakiAuthUserRequestAuthorizationsInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkMerakiAuthUserRequestAuthorizationsInner.to_json())

# convert the object into a dict
create_network_meraki_auth_user_request_authorizations_inner_dict = create_network_meraki_auth_user_request_authorizations_inner_instance.to_dict()
# create an instance of CreateNetworkMerakiAuthUserRequestAuthorizationsInner from a dict
create_network_meraki_auth_user_request_authorizations_inner_from_dict = CreateNetworkMerakiAuthUserRequestAuthorizationsInner.from_dict(create_network_meraki_auth_user_request_authorizations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


