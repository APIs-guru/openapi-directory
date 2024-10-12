# GetOrganizationSmVppAccounts200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the VPP Account | [optional] 
**vpp_service_token** | **str** | The VPP Account&#39;s Service Token | [optional] 

## Example

```python
from openapi_client.models.get_organization_sm_vpp_accounts200_response_inner import GetOrganizationSmVppAccounts200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSmVppAccounts200ResponseInner from a JSON string
get_organization_sm_vpp_accounts200_response_inner_instance = GetOrganizationSmVppAccounts200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSmVppAccounts200ResponseInner.to_json())

# convert the object into a dict
get_organization_sm_vpp_accounts200_response_inner_dict = get_organization_sm_vpp_accounts200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSmVppAccounts200ResponseInner from a dict
get_organization_sm_vpp_accounts200_response_inner_from_dict = GetOrganizationSmVppAccounts200ResponseInner.from_dict(get_organization_sm_vpp_accounts200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


