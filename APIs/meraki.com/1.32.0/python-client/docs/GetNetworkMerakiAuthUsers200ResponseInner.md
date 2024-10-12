# GetNetworkMerakiAuthUsers200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Authorization type for user. | [optional] 
**authorizations** | [**List[GetNetworkMerakiAuthUsers200ResponseInnerAuthorizationsInner]**](GetNetworkMerakiAuthUsers200ResponseInnerAuthorizationsInner.md) | User authorization info | [optional] 
**created_at** | **datetime** | Creation time of the user | [optional] 
**email** | **str** | Email address of the user | [optional] 
**id** | **str** | Meraki auth user id | [optional] 
**is_admin** | **bool** | Whether or not the user is a Dashboard administrator | [optional] 
**name** | **str** | Name of the user | [optional] 

## Example

```python
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkMerakiAuthUsers200ResponseInner from a JSON string
get_network_meraki_auth_users200_response_inner_instance = GetNetworkMerakiAuthUsers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkMerakiAuthUsers200ResponseInner.to_json())

# convert the object into a dict
get_network_meraki_auth_users200_response_inner_dict = get_network_meraki_auth_users200_response_inner_instance.to_dict()
# create an instance of GetNetworkMerakiAuthUsers200ResponseInner from a dict
get_network_meraki_auth_users200_response_inner_from_dict = GetNetworkMerakiAuthUsers200ResponseInner.from_dict(get_network_meraki_auth_users200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


