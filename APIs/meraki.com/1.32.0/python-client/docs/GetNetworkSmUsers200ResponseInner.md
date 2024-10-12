# GetNetworkSmUsers200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_groups** | **List[str]** | Active Directory Groups the user belongs to. | [optional] 
**asm_groups** | **List[str]** | Apple School Manager Groups the user belongs to. | [optional] 
**azure_ad_groups** | **List[str]** | Azure Active Directory Groups the user belongs to. | [optional] 
**display_name** | **str** | The user display name. | [optional] 
**email** | **str** | User email. | [optional] 
**full_name** | **str** | User full name. | [optional] 
**has_identity_certificate** | **bool** | A boolean indicating if the user has an associated identity certificate.. | [optional] 
**has_password** | **bool** | A boolean denoting if the user has a password associated with the record. | [optional] 
**id** | **str** | The Meraki managed Id of the user record. | [optional] 
**is_external** | **bool** | Whether the user was created using an external integration, or via the Meraki Dashboard. | [optional] 
**saml_groups** | **List[str]** | SAML Groups the user belongs to. | [optional] 
**tags** | **str** | The set of tags the user is scoped to. | [optional] 
**user_thumbnail** | **str** | The url where the users thumbnail is hosted. | [optional] 
**username** | **str** | The users username. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_users200_response_inner import GetNetworkSmUsers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmUsers200ResponseInner from a JSON string
get_network_sm_users200_response_inner_instance = GetNetworkSmUsers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmUsers200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_users200_response_inner_dict = get_network_sm_users200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmUsers200ResponseInner from a dict
get_network_sm_users200_response_inner_from_dict = GetNetworkSmUsers200ResponseInner.from_dict(get_network_sm_users200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


